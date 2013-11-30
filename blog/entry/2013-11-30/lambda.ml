open Llvm

(*==... Read code from stdin ...............................................==*)
let x =
  let lexbuf = Lexing.from_channel stdin in
  Parser.main Lexer.token lexbuf

(*==... building LLVM ......................................................==*)
let context = global_context ()
let lambda_module = create_module context "lambda"
let builder = builder context

(*--... types ..............................................................--*)
let void_t = void_type context
let i8_t = i8_type context
let i32_t = i32_type context
let lambda_t = function_type void_t [||]
let val_t = pointer_type (struct_type context [| pointer_type i8_t; pointer_type lambda_t |])

(* Count of lambda abstraction *)
(*let abs_count = List.fold_right (fun x i -> i + Ast.abs_count_stat x) x 0*)

let x = Ast.index_stats x

let max_index = List.fold_right (fun x i -> max i (Ast.max_index_stat x)) x 0

let stack_t     = array_type val_t 256
let stack_ptr_t = pointer_type i32_t
let env_t       = array_type val_t (max_index + 1)
let env_stack_t = array_type (pointer_type env_t) 256

(*--... global variables ...................................................--*)
let stack = define_global ".stack" (const_array
                                    val_t
                                    (Array.make
                                        256
                                        (const_struct
                                            context
                                            [||]))) lambda_module

let stack_ptr = define_global ".stack_ptr" (const_int i32_t 0) lambda_module
let env = define_global ".env" (const_pointer_null (pointer_type env_t)) lambda_module
let env_stack_ptr = define_global ".env_stack_ptr" (const_int i32_t 0) lambda_module
let env_stack = define_global ".env_stack" (const_array
                                        (pointer_type env_t)
                                        (Array.make
                                            256
                                            (const_struct
                                                context
                                                [||]))) lambda_module

(*--... system functions ...................................................--*)
let stack_push  = declare_function "stack_push" (function_type void_t [| val_t |]) lambda_module
let stack_pop   = declare_function "stack_pop" (function_type val_t [||]) lambda_module
let env_access  = declare_function "env_access" (function_type val_t [| i32_t |]) lambda_module
let env_assign  = declare_function "env_assign" (function_type void_t [| i32_t; val_t |]) lambda_module
let estack_push = declare_function "env_stack_push" (function_type void_t [| pointer_type env_t |]) lambda_module
let estack_pop  = declare_function "env_stack_pop" (function_type (pointer_type env_t) [||]) lambda_module
let app         = declare_function "app"  (function_type void_t [||]) lambda_module

(*--... implementations of system functions ................................--*)
(* implementation of stack_push is in lambda.ll *)
(* implementation of stack_pop is in lambda.ll *)
(* implementation of env_access is in lambda.ll *)
(* implementation of env_assign is in lambda.ll *)
(*--... implementation of estack_push ......................................--*)
let () = begin
  match params estack_push with
    | [| env |] ->
      let pos = append_block context "entry" estack_push in
      position_at_end pos builder;
      let env_stack_ptr' = build_load env_stack_ptr "env_stack_ptr" builder in
      let new_env_stack_ptr = build_add env_stack_ptr' (const_int i32_t 1) "new_env_stack_ptr" builder in
      let env_stack_head = build_in_bounds_gep env_stack [| const_int i32_t 0; new_env_stack_ptr |] "env_stack_head"  builder in
      let _ = build_store new_env_stack_ptr env_stack_ptr builder in
      let _ = build_store env env_stack_head builder in
      let _ = build_ret_void builder in
      ()
    | _ -> assert false
end
(*--... implementation of estack_pop .......................................--*)
let () = begin
  let pos = append_block context "entry" estack_pop in
  position_at_end pos builder;
  let env_stack_ptr' = build_load env_stack_ptr "env_stack_ptr" builder in
  let new_env_stack_ptr = build_sub env_stack_ptr' (const_int i32_t 1) "new_env_stack_ptr" builder in
  let env_stack_head = build_in_bounds_gep env_stack [| const_int i32_t 0; env_stack_ptr' |] "env_stack_head"  builder in
  let v = build_load env_stack_head "env" builder in
  let _ = build_store new_env_stack_ptr env_stack_ptr builder in
  let _ = build_store (const_pointer_null (pointer_type env_t)) env_stack_head builder in
  let _ = build_ret v builder in
  ()
end
(* implementation of app is in lambda.ll *)

(*--... code generation for lambda abstraction .............................--*)
let rec abs_gen_ast prefix = function
  | Ast.IxRef(i) ->
    let value = build_call env_access [| const_int i32_t i |] "val" builder in
    let _     = build_call stack_push [| value |] "" builder in
    ()
  | Ast.IxGRef(s) ->
    let fn = declare_function s lambda_t lambda_module in
    let _ = build_call fn [||] "" builder in
    ()
  | Ast.IxApp(x, y) ->
    abs_gen_ast prefix y;
    abs_gen_ast prefix x;
    let _ = build_call app [||] "" builder in
    ()
  | Ast.IxLam(id, i, x) ->

    (* Make a lambda returning *)
    let closure = build_malloc (struct_type context [| pointer_type i8_t; pointer_type lambda_t |]) "closure" builder in
    let env_ptr = build_in_bounds_gep closure [| const_int i32_t 0; const_int i32_t 0; |] "env_ptr" builder in
    let fn_ptr = build_in_bounds_gep closure [| const_int i32_t 0; const_int i32_t 1; |] "fn_ptr" builder in

    let env_cpy = build_malloc env_t "env_cpy" builder in

    for i = 0 to max_index do
      let x = build_call env_access [| const_int i32_t i |] "x" builder in
      let y = build_in_bounds_gep env_cpy [| const_int i32_t 0; const_int i32_t i |] "y" builder in
      let _ = build_store x y builder in
      ()
    done;

    let env_cpy = build_pointercast env_cpy (pointer_type i8_t) "env_cpy" builder in

    let fn = declare_function (String.concat "" ["."; prefix; ".anon_func."; string_of_int id]) lambda_t lambda_module in

    let _ = build_store env_cpy env_ptr builder in
    let _ = build_store fn fn_ptr builder in

    let _ = build_call stack_push [| closure |] "" builder in

    set_linkage Linkage.Private fn;
    let pos = append_block context "entry" fn in
    position_at_end pos builder;

    (* Take an argument from stack *)
    let arg = build_call stack_pop [||] "arg" builder in
    let _ = build_call env_assign [| const_int i32_t i; arg |] "" builder in

    abs_gen_ast prefix x;
    position_at_end pos builder;
    let _ = build_ret_void builder in
    ()

let abs_gen_stat = function
  | Ast.IxDef(s, x) ->
    let f = declare_function s lambda_t lambda_module in
    let pos = append_block context "entry" f in
    position_at_end pos builder;
    let old_env = build_load env "old_env" builder in
    let _ = build_call estack_push [| old_env |] "" builder in
    let env_init = build_malloc env_t "env" builder in
    let _ = build_store env_init env builder in
    abs_gen_ast s x;
    position_at_end pos builder;
    let ret_env = build_call estack_pop [||] "ret_env" builder in
    let _ = build_store ret_env env builder in
    let _ = build_ret_void builder in
    ()

let _ = List.map abs_gen_stat x

let () = dump_module lambda_module
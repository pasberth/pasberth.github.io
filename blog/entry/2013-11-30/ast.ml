type ast =
  | Ref of string
  | Lam of string * ast
  | App of ast * ast

type stat =
  | Def of string * ast

type indexed_ast =
  | IxRef   of int            (* Index of access to environment *)
  | IxGRef  of string         (* External name reference *)
  | IxLam   of    int         (* Id of anonymouse function *)
                * int         (* Index of store to environment *)
                * indexed_ast (* Body of lambda abstraction *)
  | IxApp   of    indexed_ast * indexed_ast

type indexed_stat =
  | IxDef of string * indexed_ast

let rec index_ast id tbl i = function
  | Ref(s) -> begin
    try
      let idx = Hashtbl.find tbl s in IxRef(idx)
    with
      Not_found -> IxGRef(s)
    end
  | Lam(s, x) -> let id' = !id in id := id' + 1; Hashtbl.add tbl s i; IxLam(id', i, index_ast id tbl (i + 1) x)
  | App(x, y) -> IxApp(index_ast id tbl i x, index_ast id tbl i y)

let index_stat id = function
  | Def(s, x) -> IxDef(s, index_ast id (Hashtbl.create 256) 0 x)

let index_stats xs = let id = ref 0 in List.map (index_stat id) xs

let rec max_index_ast = function
  | IxRef(i) -> i
  | IxGRef(_) -> 0
  | IxLam(_, i, x) -> max i (max_index_ast x)
  | IxApp(x, y) -> max (max_index_ast x) (max_index_ast y)

let rec max_index_stat = function
  | IxDef(s, x) -> max_index_ast x

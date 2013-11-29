@.stack = external global [256 x { i8*, void ()* }*]
@.stack_ptr = external global i32
@.env = external global [3 x { i8*, void ()* }*]*

define void @stack_push({ i8*, void ()* }*) {
entry:
  %stack_ptr = load i32* @.stack_ptr
  %new_stack_ptr = add i32 %stack_ptr, 1
  store i32 %new_stack_ptr, i32* @.stack_ptr
  %stack_head = getelementptr inbounds [256 x { i8*, void ()* }*]* @.stack, i32 0, i32 %new_stack_ptr
  store { i8*, void ()* }* %0, { i8*, void ()* }** %stack_head
  ret void
}

define { i8*, void ()* }* @stack_pop() {
entry:
  %stack_ptr = load i32* @.stack_ptr
  %stack_head = getelementptr inbounds [256 x { i8*, void ()* }*]* @.stack, i32 0, i32 %stack_ptr
  %val = load { i8*, void ()* }** %stack_head
  %new_stack_ptr = sub i32 %stack_ptr, 1
  store i32 %new_stack_ptr, i32* @.stack_ptr
  store { i8*, void ()* }* null, { i8*, void ()* }** %stack_head
  ret { i8*, void ()* }* %val
}

define void @env_assign(i32, { i8*, void ()* }*) {
entry:
  %env = load [3 x { i8*, void ()* }*]** @.env
  %x = getelementptr inbounds [3 x { i8*, void ()* }*]* %env, i32 0, i32 %0
  store { i8*, void ()* }* %1, { i8*, void ()* }** %x
  ret void
}

define { i8*, void ()* }* @env_access(i32) {
entry:
  %env = load [3 x { i8*, void ()* }*]** @.env
  %x = getelementptr inbounds [3 x { i8*, void ()* }*]* %env, i32 0, i32 %0
  %x1 = load { i8*, void ()* }** %x
  ret { i8*, void ()* }* %x1
}

declare void @env_stack_push([3 x { i8*, void ()* }*]*)

declare [3 x { i8*, void ()* }*]* @env_stack_pop()

define void @app() {
  %closure = call { i8*, void ()* }* @stack_pop()
  %old_env = load [3 x { i8*, void ()* }*]** @.env
  call void @env_stack_push([3 x { i8*, void ()* }*]* %old_env)
  %env_ptr = getelementptr inbounds { i8*, void ()* }* %closure, i32 0, i32 0
  %env = load i8** %env_ptr
  %env1 = bitcast i8* %env to [3 x { i8*, void ()* }*]*
  %fn_ptr = getelementptr inbounds { i8*, void ()* }* %closure, i32 0, i32 1
  %fn = load void ()** %fn_ptr
  store [3 x { i8*, void ()* }*]* %env1, [3 x { i8*, void ()* }*]** @.env
  call void %fn()
  %ret_env = call [3 x { i8*, void ()* }*]* @env_stack_pop()
  store [3 x { i8*, void ()* }*]* %ret_env, [3 x { i8*, void ()* }*]** @.env
  ret void
}
typedef struct val_t {
  struct val_t **env;
  void (*fn)(void);
} *val_t;

extern void stack_push(val_t);
extern val_t stack_pop(void);
extern void env_assign(int, val_t);
extern val_t env_access(int);
extern void env_stack_push(val_t *);
extern val_t *env_stack_pop(void);
extern void app(void);

extern void S(void);
extern void K(void);
extern void I(void);

int main(int argc, char const *argv[])
{
    stack_push(42);
    I();
    app();
    int x = stack_pop();

    printf("%d\n", x);

    return 0;
}
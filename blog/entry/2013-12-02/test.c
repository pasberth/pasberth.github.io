#include "gc.h"

int main(int argc, char const *argv[])
{
    /* この main 関数は，インタプリタで，
     *
     *     x = 1
     *
     * というコードを実行したのと同じだと考える．
     *
     */

    /* 1というオブジェクトをヒープ領域に確保 */
    int *x = (int *) gc_alloc(sizeof(int));
    *x = 1;

    /* x という変数に保存するので，参照カウントをひとつ増やす */
    gc_refer(x);

    /* 関数から離れるので， x の参照カウントを減らす */
    gc_leave(x);
    return 0;
}
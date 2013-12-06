	.cstring
LC0:
	.ascii "%d\n\0"
	.text
.globl _main
_main:
	pushq	%rbp
	movl	$0, -4(%rbp)
	movl	$1, -8(%rbp)
	jmp	L2
L1:
	movl	-8(%rbp), %eax
	addl	%eax, -4(%rbp)
	incl	-8(%rbp)
L2:
	cmpl	$15, -8(%rbp)
	jle	L1
	movl	-4(%rbp), %esi
	leaq	LC0(%rip), %rdi
	call	_printf
	popq 	%rbp
	movl 	$0, %eax
	ret

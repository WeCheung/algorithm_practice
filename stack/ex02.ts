/**
 *  逆波兰表达式(后缀表达式)
 *
 *  ['4', '13', '5', '/', '+'] 等价于  4 + (13 / 5)
 *  ['10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+']
 *  等价于 ((10 * (6 / ((9 + 3) * (-11)))) + 17) + 5
 */

import Stack from './stack'

/**
 *  思路分析：
 *
 *    遍历数组，对每个元素进行如下操作
 *      * 如果元素不是 + - * / 中的一个就入栈
 *      * 如果元素时操作符，就从栈中连续弹出两个元素，并对这两个元素进行计算，再将计算结果压入栈中
 *
 *    遍历结束后，栈里理应只有一个元素，这个元素就是整个表达式的计算结果
 *    否则，代表输入表达式有误
 */

export default function calc_exp(expression: string[]) {
	const stack = new Stack()
	const operators = ['+', '-', '*', '/']
	let num1: string, num2: string

	for (let i = 0; i < expression.length; i++) {
		if (operators.indexOf(expression[i]) !== -1) {
			num1 = stack.pop()
			num2 = stack.pop()
			stack.push(eval(num2 + expression[i] + num1))
		} else {
			stack.push(expression[i])
		}
	}

	if (stack.size() === 1) {
		return stack.top()
	} else {
		return false
	}
}

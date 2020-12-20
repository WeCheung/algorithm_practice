/**
 *  使用栈完成中序表达式转后序表达式
 *
 *  输入：['12', '+', '3']
 *  输出：['12', '3', '+']
 *
 *  (1 + (4 + 5 + 3) - 3) + (9 + 8)
 *  输入：['(', '1', '+', '(' + '4', '+', '5', '+', '3', ')', '-', '3', ')', '+', '(', '9', '+', '8', ')']
 *  输出：['1', '4', '5', '+', '3', '+', '+', '3', '-', '9', '8', '+', '+']
 *
 *  (1 + (4 + 5 + 3) / 4 - 3) + (6 + 8) * 3
 *  输出：['1', '4', '5', '+', '3', '+', '4', '/', '+', '3', '-', '6', '8', '+', '3', '*', '+']
 */
import Stack from './stack'

export default function infixExp2PostfixExp(expression: string[]) {
	const stack = new Stack()
	const postfixList: string[] = []
	const operators = ['+', '-', '*', '/']
	const operatorPriority = {
		'+': 1,
		'-': 1,
		'*': 2,
		'/': 2,
	}
	let c: string

	for (let i = 0; i < expression.length; i++) {
		c = expression[i]
		// 如果是数字
		if (!isNaN(Number(c))) {
			postfixList.push(c)
		} else if (c === '(') {
			stack.push(c)
		} else if (c === ')') {
			// 遇到右括号就把栈顶元素弹出，直到遇到左括号
			while (stack.top() !== '(') {
				postfixList.push(stack.pop())
			}
			stack.pop() // 左括号出栈
		} else {
			// 运算符
			// 如果遇到运算符，则把栈顶的运算符弹出，知道栈顶的运算符优先级小于当前运算符
			while (
				!stack.isEmpty() &&
				operators.indexOf(stack.top()) !== -1 &&
				// 优先级比较高的运算符有限运算，所以较前推入数组
				operatorPriority[stack.top()] >= operatorPriority[c]
			) {
				// 把弹出的运算符加入到 postfixList 中
				postfixList.push(stack.pop())
			}
			// 当前的运算符入栈
			stack.push(c)
		}
	}

	// for 循环结束后栈里可能还有元素，都弹出放入到 postfixList 中
	while (!stack.isEmpty()) {
		postfixList.push(stack.pop())
	}
	return postfixList
}

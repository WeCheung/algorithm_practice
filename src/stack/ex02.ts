/**
 *  逆波兰表达式(后缀表达式)
 *
 *  ['4', '13', '5', '/', '+'] 等价于  4 + (13 / 5)
 *  ['10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+']
 *  等价于 ((10 * (6 / ((9 + 3) * (-11)))) + 17) + 5
 */

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
import Stack from './stack'

export default function calc_exp(expression: string[]) {
	const stack = new Stack()
	// ##BEGIN## 代码已加密
HHAHjlHj0HjNHj6HjEHHmHj0HjhHjDHj/HjYHjEHj0Hj/Hj6HHmHjjHHmHjOHHlHHMHHlHH1HHmHHlHHTHHlHH1HHmHHlHHXHHlHH1HHmHHlHHqHHlHjG
HHAHjLHjDHjEHHmHjNHj+HjZHHZHH7HHmHj6HjEHj/HjTHjNHjMHH1HHmHjNHj+HjZHHNHH7HHmHj6HjEHj/HjTHjNHjM

HHAHjXHj0Hj/HHmHH5HjLHjDHjEHHmHjTHHmHjjHHmHHLHHUHHmHjTHHmHjHHHmHjDHgHHjhHj/HjDHj6Hj6HjTHj0HjNHHeHjLHjDHjNHjMHjEHj1HHUHHmHjTHHMHHMHHDHHmHgI
HHAHHAHjTHjXHHmHH5Hj0HjhHjDHj/HjYHjEHj0Hj/Hj6HHeHjTHjNHj5HjDHgHHj=HjXHH5HjDHgHHjhHj/HjDHj6Hj6HjTHj0HjNHjOHjTHjGHHDHHmHHGHjjHjjHHmHHTHHZHHDHHmHgI
HHAHHAHHAHjNHj+HjZHHZHHmHjjHHmHj6HjEHjYHjlHjqHHeHjhHj0HjhHH5HHD
HHAHHAHHAHjNHj+HjZHHNHHmHjjHHmHj6HjEHjYHjlHjqHHeHjhHj0HjhHH5HHD
HHAHHAHHAHj6HjEHjYHjlHjqHHeHjhHj+Hj6Hj1HH5HjDHj7HjYHjLHH5HjNHj+HjZHHNHHmHHMHHmHjDHgHHjhHj/HjDHj6Hj6HjTHj0HjNHjOHjTHjGHHmHHMHHmHjNHj+HjZHHZHHDHHD
HHAHHAHgSHHmHjDHjLHj6HjDHHmHgI
HHAHHAHHAHj6HjEHjYHjlHjqHHeHjhHj+Hj6Hj1HH5HjDHgHHjhHj/HjDHj6Hj6HjTHj0HjNHjOHjTHjGHHD
HHAHHAHgS
HHAHgS

HHAHjTHjXHHmHH5Hj6HjEHjYHjlHjqHHeHj6HjTHggHjDHH5HHDHHmHjjHjjHjjHHmHHZHHDHHmHgI
HHAHHAHj/HjDHjEHj+Hj/HjNHHmHj6HjEHjYHjlHjqHHeHjEHj0HjhHH5HHD
HHAHgSHHmHjDHjLHj6HjDHHmHgI
HHAHHAHj/HjDHjEHj+Hj/HjNHHmHjXHjYHjLHj6HjD
HHAHgS
	// ##END##
}

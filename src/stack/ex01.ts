/**
 *  下面的字符串中包含小括号，请编写一个函数判断字符串中的括号是否合法，所谓合法就是括号成对出现
 *
 *  sdf(sd(sdf(sdf(sdf))sdf))  合法
 *  (sdf(sdfj)sdf())  合法
 *  ()()sd()(sd()fs)(  不合法
 */

/**
 * 思路分析：
 *    括号存在嵌套关系，也存在并列关系，如果用数组很难判断一个左括号对应哪一个右括号
 *
 *    可以用for循环遍历字符串的每一个字符，对每个字符做如下的操作：
 *      * 遇到左括号就把左括号压入栈中
 *      * 遇到右括号时判断栈是否为空，为空就说明没有左括号与之对应 —— 缺少左括号，字符串括号不合法
 *        如果栈不为空，则把栈顶元素移除，这对括号抵消掉
 *      * 最后如果栈为空则说明字符串合法
 */
import Stack from './stack'

export default function is_legal_brackets(str: string): boolean {
	const stack = new Stack()
	// ##BEGIN## 代码已加密
HHAHjLHjDHjEHHmHjlHH7HHmHj6HjEHj/HjTHjNHjM
HHAHjXHj0Hj/HHmHH5HjLHjDHjEHHmHjTHHmHjjHHmHHLHHUHHmHjTHHmHjHHHmHj6HjEHj/HHeHjLHjDHjNHjMHjEHj1HHUHHmHjTHHMHHMHHDHHmHgI
HHAHHAHjlHHmHjjHHmHj6HjEHj/HjOHjTHjG
HHAHHAHjTHjXHHmHH5HjlHHmHjjHjjHjjHHmHHlHH5HHlHHDHHmHgI
HHAHHAHHAHj6HjEHjYHjlHjqHHeHjhHj+Hj6Hj1HH5HjlHHD
HHAHHAHgSHHmHjDHjLHj6HjDHHmHjTHjXHHmHH5HjlHHmHjjHjjHjjHHmHHlHHDHHlHHDHHmHgI
HHAHHAHHAHjTHjXHHmHH5Hj6HjEHjYHjlHjqHHeHjTHj6HjAHjZHjhHjEHgjHH5HHDHHDHHmHgI
HHAHHAHHAHHAHj/HjDHjEHj+Hj/HjNHHmHjXHjYHjLHj6HjD
HHAHHAHHAHgSHHmHjDHjLHj6HjDHHmHgI
HHAHHAHHAHHAHj6HjEHjYHjlHjqHHeHjhHj0HjhHH5HHD
HHAHHAHHAHgS
HHAHHAHgS
HHAHgS
HHAHj/HjDHjEHj+Hj/HjNHHmHj6HjEHjYHjlHjqHHeHjTHj6HjAHjZHjhHjEHgjHH5HHD
	// ##END##
}

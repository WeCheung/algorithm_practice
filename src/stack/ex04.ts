/**
 *  实现一个带min方法的栈，能返回栈里最小的元素，且时间复杂度为O(1)
 */

/**
 *  实现思路
 *    1. 在栈这个类实现的时候内部创建两个普通的栈，一个用于存数据，另一个用于存最小值
 *    2. 当最小值栈为空或者push的元素小于等于最小栈最高层的元素时，最小栈压入push的元素
 *    3. 当对存数据的栈进行pop时，判断当前出栈元素是否等于存最小值栈的值，如果相等则一起出栈，否则最小栈不变
 */

import Stack from './stack'

export default class MinStack {
	private data_stack = new Stack()
	private min_stack = new Stack()
	
	// ##BEGIN## 代码已加密
HHAHjhHj+Hj6Hj1HHmHjjHHmHH5HjTHjEHjDHjZHH7HHmHjNHj+HjZHjnHjDHj/HHDHHmHjjHjgHHmHgI
HHAHHAHjEHj1HjTHj6HHeHj5HjYHjEHjYHjrHj6HjEHjYHjlHjqHHeHjhHj+Hj6Hj1HH5HjTHjEHjDHjZHHD

HHAHHAHjTHjXHHmHH5HjEHj1HjTHj6HHeHjZHjTHjNHjrHj6HjEHjYHjlHjqHHeHjTHj6HjAHjZHjhHjEHgjHH5HHDHHmHgyHgyHHmHjTHjEHjDHjZHHmHjHHjjHHmHjEHj1HjTHj6HHeHjZHjTHjNHjrHj6HjEHjYHjlHjqHHeHjEHj0HjhHH5HHDHHDHHmHgI
HHAHHAHHAHjEHj1HjTHj6HHeHjZHjTHjNHjrHj6HjEHjYHjlHjqHHeHjhHj+Hj6Hj1HH5HjTHjEHjDHjZHHD
HHAHHAHgS
HHAHgS

HHAHjhHj0HjhHHmHjjHHmHH5HHDHHmHjjHjgHHmHgI
HHAHHAHjlHj0HjNHj6HjEHHmHjTHjEHjDHjZHHmHjjHHmHjEHj1HjTHj6HHeHj5HjYHjEHjYHjrHj6HjEHjYHjlHjqHHeHjhHj0HjhHH5HHD
HHAHHAHjTHjXHHmHH5HjTHjEHjDHjZHHmHjHHjjHHmHjEHj1HjTHj6HHeHjZHjTHjNHjrHj6HjEHjYHjlHjqHHeHjEHj0HjhHH5HHDHHDHHmHgI
HHAHHAHHAHjEHj1HjTHj6HHeHjZHjTHjNHjrHj6HjEHjYHjlHjqHHeHjhHj0HjhHH5HHD
HHAHHAHgS
HHAHgS

HHAHjZHjTHjNHHmHjjHHmHH5HHDHHmHjjHjgHHmHgI
HHAHHAHj/HjDHjEHj+Hj/HjNHHmHjEHj1HjTHj6HHeHjZHjTHjNHjrHj6HjEHjYHjlHjqHHeHjEHj0HjhHH5HHD
HHAHgS
	// ##END##
}

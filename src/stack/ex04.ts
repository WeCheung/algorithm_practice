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

	push = (item: number) => {
		this.data_stack.push(item)

		if (this.min_stack.isEmpty() || item <= this.min_stack.top()) {
			this.min_stack.push(item)
		}
	}

	pop = () => {
		const item = this.data_stack.pop()
		if (item <= this.min_stack.top()) {
			this.min_stack.pop()
		}
	}

	min = () => {
		return this.min_stack.top()
	}
}

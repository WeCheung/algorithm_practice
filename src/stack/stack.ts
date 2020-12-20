/**
 * 栈拥有的方法：
 *    push
 *    pop
 *    top
 *    isEmpty
 *    size
 *    clear
 *
 * @class Stack
 */
export default class Stack {
	private items: any[] = []

	push = (item: any) => {
		this.items.push(item)
	}

	pop = () => {
		return this.items.pop()
	}

	top = () => {
		return this.items[this.items.length - 1]
	}

	isEmpty = () => {
		return !this.items.length
	}

	size = () => {
		return this.items.length
	}

	clear = () => {
		this.items = []
	}
}

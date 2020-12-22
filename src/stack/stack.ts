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

	pop = (): any => {
		return this.items.pop()
	}

	top = (): any => {
		return this.items[this.items.length - 1]
	}

	isEmpty = (): any => {
		return !this.items.length
	}

	size = (): number => {
		return this.items.length
	}

	clear = (): void => {
		this.items = []
	}
}

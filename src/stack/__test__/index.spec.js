import is_legal_brackets from '../ex01'
import calc_exp from '../ex02'
import infixExp2PostfixExp from '../ex03'
import MinStack from '../ex04'
import {expect, test} from '@jest/globals';

test('ex01', () => {
	expect(is_legal_brackets('sdf(sd(sdf(sdf(sdf))sdf))')).toBe(true)
	expect(is_legal_brackets('(sdf(sdfj)sdf())')).toBe(true)
	expect(is_legal_brackets('()()sd()(sd()fs)(')).toBe(false)
})

test('ex02', () => {
	const arr1 = ['4', '13', '5', '/', '+']
	const temp1 = ['10', '6', '9', '3', '+', '-11', '*']
	const temp2 = ['/', '*', '17', '+', '5', '+']
	const arr2 = temp1.concat(temp2)
	const arr3 = ['1', '2', '+', '3']

	expect(calc_exp(arr1) - 0).toBe(6.6)
	expect(calc_exp(arr2).toFixed(2) - 0).toBe(21.55)
	expect(calc_exp(arr3)).toBe(false)
})

test('ex03', () => {
	const arr1 = '["12","3","+"]'
	const arr2 = '["1","4","5","+","3","+","+","3","-","9","8","+","+"]'

	const ans1 = JSON.stringify(infixExp2PostfixExp(['12', '+', '3']))
	const ans2 = JSON.stringify(infixExp2PostfixExp(['(', '1', '+', '(' + '4', '+', '5', '+', '3', ')', '-', '3', ')', '+', '(', '9', '+', '8', ')']))

	expect(ans1).toBe(arr1)
	expect(ans2).toBe(arr2)
})

test('ex04', () => {
	const minStack = new MinStack()
	minStack.push(10)
	minStack.push(2)
	minStack.pop()
	minStack.push(5)
	minStack.push(4)
	minStack.pop()
	minStack.push(3)
	minStack.pop()
	minStack.push(10)
	minStack.push(7)
	minStack.push(6)
	expect(minStack.min()).toBe(5)
})

/* eslint-disable no-undef */
require('jest-matcher-one-of')
const fns = require('./problems')

describe('removeBlank', () => {
  test('should remove all empty values EXCEPT 0 from an array', () => {
    expect(fns.removeBlank([0, NaN, undefined, false, '', null, 'Kevin'])).toEqual([0, 'Kevin'])
  })
  test('should be able to handle complex data types', () => {
    expect(fns.removeBlank([0,[],{}])).toEqual([0,[],{}])
  })
})

describe('randomElement', () => {
  test('should return a random element from an array', () => {
    expect(fns.randomElement(['red', 'green', 'blue'])).toBeOneOf(['red', 'green', 'blue'])
  })
})

describe('secondLowestSecondHighest', () => {
  test('should return the second highest and second lowest numbers of an array', () => {
    expect(fns.secondLowestSecondHighest([99,2000,-93,40,-761115,11])).toEqual([-93,99])
  })
})

describe('coins', () => {
  test('should return the coins needed to make up the price supplied', () => {
    expect(fns.coins(1.50)).toEqual([100, 50])
  })
  test('should use the smallest number of coins possible', () => {
    expect(fns.coins(1.99)).toEqual([100, 50, 20, 20, 5, 2, 2])
    expect(fns.coins(2.88)).toEqual([100, 100, 50, 20, 10, 5, 2, 1])
  })
})

describe('mergeUnique', () => {
  test('should merge two arrays', () => {
    expect(fns.mergeUnique([1,2,3], [4,5,6])).toEqual([1,2,3,4,5,6])
  })
  test('should remove duplicates', () => {
    expect(fns.mergeUnique(['Mike', 'Emily', 'Eduardo'], ['Eduardo', 'Will', 'Emily'])).toEqual(['Mike', 'Emily', 'Eduardo', 'Will'])
    expect(fns.mergeUnique([5,10,15,20], [10,20,30,40])).toEqual([5,10,15,20,30,40])
  })
})

describe('fibonacci', () => {
  test('should return the first n fibonacci numbers', () => {
    expect(fns.fibonacci(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13])
    expect(fns.fibonacci(1)).toEqual([0])
    expect(fns.fibonacci(50)).toEqual([0,1,1,2,3,5,8,13,21,34,55,89,144,233,377,610,987,1597,2584,4181,6765,10946,17711,28657,46368,75025,121393,196418,317811,514229,832040,1346269,2178309,3524578,5702887,9227465,14930352,24157817,39088169,63245986,102334155,165580141,267914296,433494437,701408733,1134903170,1836311903,2971215073,4807526976,7778742049])
  })
})

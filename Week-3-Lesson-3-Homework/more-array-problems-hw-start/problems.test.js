/* eslint-disable no-undef */
const fns = require('./problems')

describe('This is our demo test function, return an empty array to pass', () => {
  test('should return an empty array', () => {
    expect(fns.demo([])).toEqual([])
  })
})

describe('Odds and Evens', () => {
  test('Should return strings of \'even\' and \'odd\' in place of even and odd numbers', () => {
    expect(fns.oddsAndEvens([1, 2, 3, 4, 5, 6, 7, 8])).toEqual(['odd', 'even', 'odd', 'even', 'odd', 'even', 'odd', 'even'])
    expect(fns.oddsAndEvens([1, 3, 5, 7, 9, 11])).toEqual(['odd', 'odd', 'odd', 'odd', 'odd', 'odd' ])
    expect(fns.oddsAndEvens([2, 4, 6, 8, 10, 12])).toEqual(['even', 'even', 'even', 'even', 'even', 'even'])
  })
})

describe('beginsWithB', () => {
  test('should return only words begining with uppercase B', () => {
    expect(fns.beginsWithB(['Boulder', 'banana', 'Tennis', 'leg', 'Berry'])).toEqual(['Boulder', 'Berry'])
    expect(fns.beginsWithB(['Coca-Cola', 'Bottle', 'Bag', 'Beef', 'tango'])).toEqual(['Bottle', 'Bag', 'Beef'])
  })
})

describe('multiplyBy10', () => {
  test('should multiply each value by 10', () => {
    expect(fns.multiplyBy10([4, 3])).toEqual([40, 30])
  })
  test('should multiply each value by 10 and make negative integers positive', () => {
    expect(fns.multiplyBy10([-3, 0, 100])).toEqual([30, 0, 1000])
  })
})

describe('findIndex', () => {
  test('should find the index of given value in the array', () => {
    expect(fns.findIndex(2, [4, 3, 2, 1])).toEqual(2)
    expect(fns.findIndex('Jim', ['Jim', 120, 'Bob'])).toEqual(0)
  })
  test('should return Not Found if value not present in the array', () => {
    expect(fns.findIndex('Jim', ['John', 120, 'Bob'])).toEqual('Not Found')
  })
})

describe('divisibleBy5', () => {
  test('should check if ANY of the array values are divisible by 5', () => {
    expect(fns.divisibleBy5([4, -18, 25, 54])).toEqual(true)
    expect(fns.divisibleBy5([10, -10, 34, 150, 0])).toEqual(true)
  })
  test('should return false if none of the array values are divisible by 5', () => {
    expect(fns.divisibleBy5([42, 38, 21, 1])).toEqual(false)
  })
})

describe('divisibleBy10', () => {
  test('should check if ALL of the array values are divisible by 10', () => {
    expect(fns.divisibleBy10([10, 50, 200])).toEqual(true)
    expect(fns.divisibleBy10([10, -10, 0, 80])).toEqual(true)
  })
  test('should return false if one or more of the array values are not divisible by 10', () => {
    expect(fns.divisibleBy10([10, 130, 55, 7])).toEqual(false)
  })
})

describe('sumOfArray', () => {
  test('should return the sum of an array of numbers', () => {
    expect(fns.sumOfArray([12, 4, 4])).toEqual(20)
  })
  test('should return the sum of an array of stringified numbers and numbers', () => {
    expect(fns.sumOfArray(['32', 1, '10'])).toEqual(43)
  })
})
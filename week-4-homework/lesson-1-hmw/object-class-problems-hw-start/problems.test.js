/* eslint-disable no-undef */
const problems = require('./problems')

describe('laptop', () => {
  test('should have a `make` property which is a string', () => {
    expect(problems.laptop).toHaveProperty('make')
    expect(typeof(problems.laptop.make)).toBe('string')
  })

  test('should have a `model` property which is a string', () => {
    expect(problems.laptop).toHaveProperty('model')
    expect(typeof(problems.laptop.model)).toBe('string')
  })

  test('should have a `ram` property which is a number', () => {
    expect(problems.laptop).toHaveProperty('ram')
    expect(typeof(problems.laptop.ram)).toBe('number')
  })

  test('should have a `storage` property which is a number', () => {
    expect(problems.laptop).toHaveProperty('storage')
    expect(typeof(problems.laptop.storage)).toBe('number')
  })
})

describe('wineBottle', () => {
  test('should have a `name` property which is a string', () => {
    expect(problems.wineBottle).toHaveProperty('name')
    expect(typeof(problems.wineBottle.name)).toBe('string')
  })

  test('should have a `grape` property which is a string', () => {
    expect(problems.wineBottle).toHaveProperty('grape')
    expect(typeof(problems.wineBottle.grape)).toBe('string')
  })

  test('should have a `vinatge` property which is a number', () => {
    expect(problems.wineBottle).toHaveProperty('vintage')
    expect(typeof(problems.wineBottle.vintage)).toBe('number')
  })

  test('should have a `volume` property which is a number', () => {
    expect(problems.wineBottle).toHaveProperty('volume')
    expect(typeof(problems.wineBottle.volume)).toBe('number')
  })

  test('should have a `amountRemaining` property which is a number', () => {
    expect(problems.wineBottle).toHaveProperty('amountRemaining')
    expect(typeof(problems.wineBottle.amountRemaining)).toBe('number')
  })

  test('should have a `drink` method', () => {
    expect(typeof(problems.wineBottle.drink)).toBe('function')
  })

  test('should remove the given amount from `amountRemaining`', () => {
    problems.wineBottle.amountRemaining = 750
    problems.wineBottle.drink(250)
    expect(problems.wineBottle.amountRemaining).toEqual(500)
  })

  test('should have a `refill` method', () => {
    expect(typeof(problems.wineBottle.refill)).toBe('function')
  })

  test('should add the given amount from `amountRemaining`', () => {
    problems.wineBottle.amountRemaining = 500
    problems.wineBottle.refill(250)
    expect(problems.wineBottle.amountRemaining).toEqual(750)
  })
})

describe('Product', () => {

  let product

  beforeEach(() => {
    product = new problems.Product('iPhone', 'Latest model', 800)
  })

  test('should have a `name` property which is a string', () => {
    expect(product).toHaveProperty('name')
    expect(typeof(product.name)).toEqual('string')
  })

  test('should have a `description` property which is a string', () => {
    expect(product).toHaveProperty('description')
    expect(typeof(product.description)).toEqual('string')
  })

  test('should have a `price` property which is a number', () => {
    expect(product).toHaveProperty('price')
    expect(typeof(product.price)).toEqual('number')
  })
})

describe('Cart', () => {

  let cart, shirt, cap, trainers

  beforeEach(() => {
    cart = new problems.Cart()
    shirt = new problems.Product('Shirt', 'White, 16" collar, long-sleve', 20)
    cap = new problems.Product('Cap', 'Orange, snap-back', 30)
    trainers = new problems.Product('Trainers', 'Adidas Campus, navy', 70)
  })

  it('should have a `contents` property which is an array', () => {
    expect(cart).toHaveProperty('contents')
    expect(typeof(cart.contents)).toEqual('object')
  })

  it('should have an `addItem` method', () => {
    expect(typeof(cart.addItem)).toBe('function')
  })

  it('should be able to add an item to the `contents`', () => {
    cart.addItem(shirt)
    expect(cart.contents.length).toEqual(1)
  })

  it('should have a `removeItem` method', () => {
    expect(typeof(cart.removeItem)).toBe('function')
  })

  it('should be able to remove an item from the `contents`', () => {
    cart.addItem(shirt)
    cart.addItem(trainers)
    cart.removeItem(shirt)
    expect(cart.contents.length).toEqual(1)
  })

  it('should have a `empty` method', () => {
    expect(typeof(cart.empty)).toBe('function')
  })

  it('should be able to remove all items from the `contents`', () => {
    cart.addItem(cap)
    cart.addItem(shirt)
    cart.addItem(trainers)
    cart.empty()
    expect(cart.contents.length).toEqual(0)
  })

  it('should have a `getTotal` method', () => {
    expect(typeof(cart.getTotal)).toBe('function')
  })

  it('should sum to prices of all items in the `contents`', () => {
    cart.addItem(cap)
    cart.addItem(shirt)
    cart.addItem(trainers)
    expect(cart.getTotal()).toEqual(120)
  })
})

describe('Shape', () => {
  let shape

  beforeEach(() => {
    shape = new problems.Shape(10, 20)
  })

  it('should have a `width` property which is a number', () => {
    expect(shape).toHaveProperty('width')
    expect(typeof(shape.width)).toEqual('number')
  })

  it('should have a `height` property which is a number', () => {
    expect(shape).toHaveProperty('height')
    expect(typeof(shape.height)).toEqual('number')
  })

  it('should have a `getArea` method', () => {
    expect(typeof(shape.getArea)).toEqual('function')
  })

  it('should calculate the area of the shape', () => {
    expect(shape.getArea()).toEqual(200)
  })

  it('should have a `getPerimeter` method', () => {
    expect(typeof(shape.getPerimeter)).toEqual('function')
  })

  it('should calculate the perimeter of the shape', () => {
    expect(shape.getPerimeter()).toEqual(60)
  })
})


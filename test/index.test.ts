import { fizzBuzzNumber, fizzBuzzIterate } from '../src/index'

describe('Test FizzBuzz function for one input', () => {
  it('Should return number 2 for 2 as input', () => {
    const number = fizzBuzzNumber(2)
    expect(number).toBe(2)
  })

  it('Should return Fizz for number 3', () => {
    const result = fizzBuzzNumber(3)
    expect(result).toBe('Fizz')
  })

  it('Should return Buzz for number 5', () => {
    const result = fizzBuzzNumber(5)
    expect(result).toBe('Buzz')
  })

  it('Should return FizzBuzz for number 15', () => {
    const result = fizzBuzzNumber(15)
    expect(result).toBe('FizzBuzz')
  })

  it('Should return Fizz for number 6', () => {
    const result = fizzBuzzNumber(6)
    expect(result).toBe('Fizz')
  })

  it('Should return Buzz for number 10', () => {
    const result = fizzBuzzNumber(10)
    expect(result).toBe('Buzz')
  })

  it('Should return FizzBuzz for number 30', () => {
    const result = fizzBuzzNumber(30)
    expect(result).toBe('FizzBuzz')
  })
})

describe('Test displaying multiple number at once', () => {
  it('Should work for only 1', () => {
    const result: string = fizzBuzzIterate(1)
    expect(result).toBe('1')
  })
  it('Should work for only 2', () => {
    const result: string = fizzBuzzIterate(2)
    const expectedResult = '1\n2'
    expect(result).toBe(expectedResult)
  })
  it('Should work for only 5', () => {
    const result: string = fizzBuzzIterate(5)
    const expectedResult = '1\n2\nFizz\n4\nBuzz'
    expect(result).toBe(expectedResult)
  })
  it('Should work for 100', () => {
    const result: string = fizzBuzzIterate(100)
    expect(result).toMatchSnapshot()
  })
})

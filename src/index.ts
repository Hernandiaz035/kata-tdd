const fizzBuzzNumber = (number) => {
  if (number % 3 === 0 && number % 5 === 0) {
    return 'FizzBuzz'
  } else if (number % 3 === 0) {
    return 'Fizz'
  } else if (number % 5 === 0) {
    return 'Buzz'
  }
  return number
}

const fizzBuzzIterate = (limit) => {
  let result = []
  for (let i = 1; i <= limit; i++) {
    result.push(fizzBuzzNumber(i))
  }
  return result.join('\n')
}

export { fizzBuzzNumber, fizzBuzzIterate }

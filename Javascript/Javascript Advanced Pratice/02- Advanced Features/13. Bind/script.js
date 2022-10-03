function product(a, b) {
  console.log(`a=${a}, b=${b}`);
  return a * b
}

numbers = [10, 20, 30, 40, 50]

newNumbers = numbers.map(product.bind(null, 2))

console.log(newNumbers)

// function tripleit(q) {
//   console.log(`q=${q}`)
//   return 3 * q
// }

// tripleNumbers = numbers.map(tripleit)

// console.log(tripleNumbers);
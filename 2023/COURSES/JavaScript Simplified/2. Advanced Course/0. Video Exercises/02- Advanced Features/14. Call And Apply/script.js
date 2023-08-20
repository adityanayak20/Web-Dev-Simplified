function sum(a, b, c) {
  console.log(`a=${a}, b=${b}, c=${c}`);
  return a + b + c
}

console.log(`Sum =`,sum(2, 3, 4))
console.log(`Sum =`,sum.bind(null, 2)(3, 4))
console.log(`Sum =`,sum.call(null, 2, 3, 4))
console.log(`Sum =`,sum.apply(null, [2, 3, 4]))

// function sum(...numbers) {
//   return numbers.reduce((accumulator, n) => accumulator + n, 0)
// }

// numbersToAdd = [1, 2, 3, 4, 5]

// console.log(`Sum =`,sum(...numbersToAdd))
// console.log(`Sum =`,sum.bind(null)(...numbersToAdd))
// console.log(`Sum =`,sum.call(null, ...numbersToAdd))
// console.log(`Sum =`,sum.apply(null, numbersToAdd))
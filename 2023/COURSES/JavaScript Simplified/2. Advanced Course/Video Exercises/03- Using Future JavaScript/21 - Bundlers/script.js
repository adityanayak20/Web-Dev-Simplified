// function nameToFirstAndLast(fullname) {
//   const [firstName, lastName] = fullname.split(' ')
//   return {firstName, lastName}
// }

// const {firstName, lastName} = nameToFirstAndLast("Aditya Nayak")
// console.log(firstName)
// console.log(lastName)

function addAndMultiply({a, b}) {
  return [a+b, a*b]
}

const [sum, product] = addAndMultiply({a: 2, b: 3})
console.log(`Sum: ${sum}`)
console.log(`Product: ${product}`)
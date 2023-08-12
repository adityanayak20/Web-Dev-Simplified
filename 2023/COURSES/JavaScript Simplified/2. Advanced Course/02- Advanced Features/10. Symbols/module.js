const sym1 = Symbol.for("name")
export const person = {
  age: 25,
  name: "cook",
  [sym1]: "Kyle"
}

// console.log(person)

// Object.entries(person).forEach(([key, value]) => {
//   console.log(`${key}: ${value}`)
// })

// console.log(JSON.stringify(person))
// console.log(Object.getOwnPropertyNames(person))

// console.log(Object.getOwnPropertySymbols(person))

console.log(person[sym1])

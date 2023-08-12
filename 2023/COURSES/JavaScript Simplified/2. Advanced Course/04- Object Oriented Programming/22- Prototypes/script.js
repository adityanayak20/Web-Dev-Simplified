function Person(name, age) {
  this.name = name
  this.age = age
}

Person.prototype.printName = function() {
  console.log(this.name)
}

Person.printHi = function() {
  console.log('Hi')
}

Person.goodName = "Sally"

const person = new Person('Kyle', 25)
console.log(person)
console.log(Person.goodName)
Person.printHi()


// const person = new Person('Kyle', 25)
// const emptyObject1 = {}
// const emptyObject2 = Object.create(person)
// const emptyObject3 = Object.create(null)

// console.log("%cperson", "font-weight: bold")
// console.log(person)
// // console.log(Object.getPrototypeOf(person))
// // console.log(Object.getPrototypeOf(Object.getPrototypeOf(person)))

// console.log("%cempty object: {}", "font-weight: bold")
// console.log(emptyObject1)
// // console.log(Object.getPrototypeOf(emptyObject1))
// // console.log(Object.getPrototypeOf(Object.getPrototypeOf(emptyObject1)))

// console.log("%cempty object with person as proto: {}", "font-weight: bold")
// console.log(emptyObject2)
// // console.log(Object.getPrototypeOf(emptyObject2))
// // console.log(Object.getPrototypeOf(Object.getPrototypeOf(emptyObject2)))
// // console.log(Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(emptyObject2))))

// console.log("%cempty object with null as proto: {}", "font-weight: bold")
// console.log(emptyObject3)
// // console.log(Object.getPrototypeOf(emptyObject3))

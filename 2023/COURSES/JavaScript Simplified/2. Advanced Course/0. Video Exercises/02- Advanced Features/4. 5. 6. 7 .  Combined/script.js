//------------------------4. Enhanced Object Literals----------------------------------------------

// const propertyName = "name"
// const index = 1
// const firstName = "Kyle"
// const age = 25
// const school = "IIM"

// const person = {
//   [propertyName]: firstName,
//   [`age${index}`]: age,
//   school,
//   sayHi() {
//     console.log("Hi")
//   }
// }

// console.log(person)


//------------------------5. Default Parameter----------------------------------------------


function greet(firstName,
               lastName,
               {salutation = "Hi", suffix = "Mr"} = {}
              ) {
    console.log(`${salutation}, ${suffix}.${firstName} ${lastName}`)            
}


greet("Kyle", "Cook", {salutation: "Hello"})


//------------------------6. Nullish Coalescing && Styling Console Log-------------------
// function calculatePrice(price, taxes, description) {
//   taxes = taxes ?? 0.05
//   description = description ?? 'Default item'
//   const total = price * (1 + taxes)
//   console.log(`%c${description} with Tax:%c ${total}`,
//   "font-weight: bold",
//   "color: green")
// }

// calculatePrice(100, 0.07, "My item")
// calculatePrice(100, 0, "My item")
// calculatePrice(100, undefined, "")

//------------------------7. Optional Chaining------------------------------------------


// const person1 = {
//   name: 'Kyle',
//   hobbies: ['POLO']
// }

// const person2 = {
//   name: 'Kyle',
//   address: {
//     street: '123 Main St'
//   }
// }

// const person3 = {
//   name: 'Kyle',
//   address: {
//     street: '123 Main St'
//   },
//   hobbies: ['POLO'],
//   print() { console.log(this) }
// }

// console.log(person1?.address?.street)
// console.log(person2?.address?.street)

// console.log(person2.hobbies?.[0].toLowerCase())
// console.log(person1.hobbies?.[0].toLowerCase())

// person3.print?.()
// person2.print?.()
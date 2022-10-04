console.log(`window this: ${this}`)

{
  console.log(`bracket this: ${this}`)
}

function foo() {
  console.log(`function this: ${this}`)
}
foo()

const poo = () => {
  console.log(`arrow this: ${this}`)
}
poo()


const person1 = {
  name: "kyle",
  age: 26,
  outerFunction() {
    console.log(`outerFunction this: ${this}`)
    console.log(`name: ${this.name} age: ${this.age}`)
    const innerArrow = () => {
      console.log(`innerArrow this: ${this}`)
      console.log(`name: ${this.name} age: ${this.age}`)
    }
    function innerFunction() {
      console.log(`innerFunction this: ${this}`)
      console.log(`name: ${this.name} age: ${this.age}`)
    }
    innerArrow()
    innerFunction()
  }
}

person1?.outerFunction?.()

const person2 = {
  name: "sally",
  age: 24,
  outerArrow: () => {
    console.log(`outerArrow this: ${this}`)
    console.log(`name: ${this.name} age: ${this.age}`)
    function innerFunction() {
      console.log(`innerFunction this: ${this}`)
      console.log(`name: ${this.name} age: ${this.age}`)
    }
    const innerArrow = () => {
      console.log(`innerArrow this: ${this}`)
      console.log(`name: ${this.name} age: ${this.age}`)
    }
    innerFunction()
    innerArrow()
  }
}

person2?.outerArrow?.()
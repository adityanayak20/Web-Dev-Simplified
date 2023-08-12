// function* simpleGenerator() {
//   console.log("Before yield 1")
//   yield 1
//   console.log("After yield 1")
//   console.log("Before yield 2")
//   yield 2
//   console.log("After yield 2")
//   console.log("Before yield 3")
//   yield 3
//   console.log("After yield 3")
// }

// const generatorObject = simpleGenerator()

// console.log(generatorObject.next())
// console.log(generatorObject.next())
// const generatorObject2 = simpleGenerator()
// console.log(generatorObject.next())
// console.log(generatorObject.next())

// function* generateId() {
//   let id = 1
//   while(true) {
//     yield id
//     id++
//   }
// }

// const generatorObject = generateId()

// console.log(generatorObject.next())
// console.log(generatorObject.next())
// console.log(generatorObject.next())
// console.log(generatorObject.next())
// console.log(generatorObject.next())
// console.log(generatorObject.next())
// console.log(generatorObject.next())
// console.log(generatorObject.next())
// console.log(generatorObject.next())
// const generatorObject2 = generateId()
// console.log(generatorObject2.next())


// Iterators

// function* iterator(array) {
//   for (let i = 0; i < array.length; i++) {
//     yield array[i]
//     //console.log(`Before yield array[${i}]`)
//     //yield {[`array[${i}]`] : array[i]}
//     //console.log(`After yield array[${i}]`)

//   }
// }

// const arr = [11, 22, 33, 44]
// const itr = iterator(arr)

// console.log(itr.next())
// console.log(itr.next())
// console.log(itr.next())
// console.log(itr.next())
// console.log(itr.next())


function* generateId() {
  let id = 1
  while(true) {
    const incrementor = yield id
    if(incrementor != null) {
      id += incrementor
    }else {
      id++
    }
  }
}

const generatorObject = generateId()

console.log(generatorObject.next())
console.log(generatorObject.next(5))
console.log(generatorObject.next(2))
console.log(generatorObject.next())
console.log(generatorObject.next())
console.log(generatorObject.next())
console.log(generatorObject.return(1024))
console.log(generatorObject.next(99999))

//console.log(`Return Value of yield array[${i}]: ${returnValue}`)

// function* foo() {
//   console.log("Before yield 1")
//   const returnValue1 = yield 1
//   console.log("After yield 1")

//   console.log(`Return Value of yield 1: ${returnValue1}`)
  
//   console.log("Before yield 2")
//   const returnValue2 = yield 2
//   console.log("After yield 2")
  
//   console.log(`Return Value of yield 2: ${returnValue2}`)

//   console.log("Before yield 2")
//   const returnValue3 = yield 3
//   console.log("After yield 3")

//   console.log(`Return Value of yield 3: ${returnValue3}`)

// }

// responsObject = foo()

// console.log(responsObject.next(11))
// console.log(responsObject.next(22))
// console.log(responsObject.next(33))
// console.log(responsObject.next('********Returning after yield 3*******'))

// function* fibonacciGenerator() {
//   first = 1
//   second = 1
//   yield first
//   yield second
//   while(true) {
//     let third = first + second
//     yield third
//     first = second
//     second = third
//   }
// }

// const fib = fibonacciGenerator()

// console.log(fib.next())
// console.log(fib.next())
// console.log(fib.next())
// console.log(fib.next())
// console.log(fib.next())
// console.log(fib.next())
// console.log(fib.next())
// console.log(fib.next())
// console.log(fib.next())
// console.log(fib.next())
// console.log(fib.next())
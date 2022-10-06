function getValueWithDelay(value, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value)
    }, delay)
  })
}

// function getValueWithDelayError(value, delay) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject("Error")
//     }, delay)
//   })
// }
// async function doStuff() {
//    try {
//       const value1 = await getValueWithDelay('Kyle', 250)
//       console.log(value1)
//       const value2 = await getValueWithDelay('Cook', 250)
//       console.log(value2)
//       const value3 = await getValueWithDelayError('Hi', 250)
//       console.log(value3)
//       const value4 = await getValueWithDelay('Sally', 250)
//       console.log(value4)
//     }
//    catch (e) { 
//     console.error(e)
//    }
//    finally {
//     console.log("Code Finished")
//    }
// }

// doStuff()

//-----------------------------------------------------------


async function loopStuff() {
  for (let i = 0; i < 10; i++) {
    const value = await getValueWithDelay(i, 250)
    console.log(value)
  }
}

loopStuff()

// for (let i = 0; i < 10; i++) {
//   getValueWithDelay(i, 250).then(value => {
//     console.log(value)
//   })
  
// }






// function setTimeoutPromise(duration) {
//   return new Promise(resolve => {
//     setTimeout(resolve, duration)
//   })
// }

// setTimeoutPromise(1000).then(() => {
//   console.log("After 1 sec")
//   return setTimeoutPromise(2000)
// }).then(() => {
//   console.log("After 2 sec")
//   return setTimeoutPromise(3000)
// }).then(() => {
//   console.log("After 3 sec")
// })

//-----------------------------------------------------------

// const button = document.querySelector('#btn')

// function addEventListenerPromise(element, method) {
//   return new Promise(resolve => {
//     element.addEventListener(method, resolve)
//   })
// }

// addEventListenerPromise(button, 'click').then(e => {
//   console.log("Button Clicked")
//   console.log(e.target)
// })

//-----------------------------------------------------------

// function getPromiseList() {
//   return new Promise(resolve => {
//     setTimeout(() => {  resolve(['Joker', 'Batman']) }, 1000);
//   })
  
// }
// function findPerson(who) {
//   const list = getPromiseList().then(list => {
//     const found = list.some(person => person === who)
//     console.log(found)
//   })
  
// }
// findPerson('Joker')


//-----------------------------------------------------------

// function watchTutorialPromise() {
//   let userLeft = false
//   let userWatchingCatMeme = false
//   return new Promise((resolve, reject) => {
//     if (userLeft) {
//       reject({
//         name: 'User Left', 
//         message: ':('
//       })
//     } else if (userWatchingCatMeme) {
//       reject({
//         name: 'User Watching Cat Meme',
//         message: 'WebDevSimplified < Cat' 
//       })
//     } else {
//       resolve('Thumbs up and Subscribe')
//     }
//   })
// }

// watchTutorialPromise().then(message => {
//   console.log(message)
// }).catch(error => {
//   console.log(error.name + ' ' + error.message)
// })


//-----------------------------------------------------------

// const recordVideoOne = new Promise((resolve, reject) => {
//   resolve('Video 1 Recorded')
// })

// const recordVideoTwo = new Promise((resolve, reject) => {
//   resolve('Video 2 Recorded')
// })

// const recordVideoThree = new Promise((resolve, reject) => {
//   resolve('Video 3 Recorded')
// })


//-----------------------------------------------------------

// Promise.all([
//   Promise.resolve("1 Succeded"),
//   Promise.resolve("2 Succeded"),
//   Promise.resolve("3 Succeded")
// ]).then(messages => {
//   console.log("Promise.all =>", messages)
// }).catch(error => {
//     console.error("Promise.any =>", error)
// })

//-----------------------------------------------------------

// Promise.any([
//   Promise.reject("1 Error"),
//   Promise.reject("2 Error"),
//   Promise.resolve("3 Succeded")

// ]).then(message => {
//   console.log("Promise.any =>",message)
// }).catch(error => {
//     console.error("Promise.any =>", error)
// })

//-----------------------------------------------------------

// Promise.race([
//   Promise.reject("1 Error"),
//   Promise.resolve("2 Succeded"),
//   Promise.resolve("3 Succeded")

// ]).then(message => {
//   console.log("Promise.race =>",message)
// }).catch(error => {
//     console.error("Promise.race =>",error)
// })


//-----------------------------------------------------------

// Promise.allSettled([
//   Promise.reject("1 Error"),
//   Promise.reject("2 Error"),
//   Promise.resolve("3 Succeded")

// ]).then(message => {
//   console.log("Promise.allSettled =>",message)
// })

//-----------------------------------------------------------


// Promise.resolve("here")
//        .then( message => {
//         console.log(message)
//        })
//        .catch( error => {
//         console.error(error)
//        })
//        .finally(() => {
//         console.log("finally")
//        })

//-----------------------------------------------------------

getValueWithDelay('Kyle', 250).then(value => {
       console.log(value)
       return getValueWithDelay('Cook', 250)
     }).then(value => {
       console.log(value)
       return getValueWithDelayError('Hi', 250)
     }).then(value => {
       console.log(value)
       return getValueWithDelay('Sally', 250)
     }).catch(error => {
       console.error(error)
     })
       .finally(() => {
         console.log("Code Finished")
       })
//-----------------------------------------------------------       
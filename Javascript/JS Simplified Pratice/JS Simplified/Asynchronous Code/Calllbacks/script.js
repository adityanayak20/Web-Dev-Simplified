
// function setTimeoutCallback(method, duration) {
//   setTimeout(method, duration)
// }

// setTimeoutCallback(() => {
//   console.log("After 1 sec")
//   setTimeoutCallback( () => {
//     console.log("After 2 sec")
//     setTimeoutCallback(() => {
//     console.log("After 3 sec")
//     }, 3000)
//   }, 2000)
// }, 1000)

//-----------------------------------------------------------

// const button = document.querySelector('#btn')

// function addClickEventListener(element, callback) {
//   element.addEventListener('click', callback)
// }

// addClickEventListener(button, e => {
//   console.log("Button Clicked")
//   console.log(e.target)
// })

//-----------------------------------------------------------


// function getList() {
//   return ['Joker', 'Batman']
// }
// function findPerson(who) {
//   const list = getList()
//   const found = list.some(person => person === who)
//   console.log(found)
// }
// findPerson('Joker')

//-----------------------------------------------------------

// function watchTutorialCallback(callback, errorCallback) {
//   let userLeft = false
//   let userWatchingCatMeme = false

//   if (userLeft) {
//     errorCallback({
//       name: 'User Left', 
//       message: ':('
//     })
//   } else if (userWatchingCatMeme) {
//     errorCallback({
//       name: 'User Watching Cat Meme',
//       message: 'WebDevSimplified < Cat' 
//     })
//   } else {
//     callback('Thumbs up and Subscribe')
//   }
// }


// watchTutorialCallback(message => {
//   console.log(message)
// }, error => {
//   console.log(error.name + ' ' + error.message)
// })

//-----------------------------------------------------------

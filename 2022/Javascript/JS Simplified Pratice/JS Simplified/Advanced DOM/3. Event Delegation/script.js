// const buttons = [...document.querySelectorAll("button")]

// document.addEventListener('click', () => {
//   console.log("Clicked Document")
// })

// document.body.addEventListener('click', () => {
//   console.log("Clicked Body")
// })

// buttons.forEach(button => {
//   button.addEventListener('click', e => {
//     //e.stopPropagation()
//     console.log(`Clicked ${button.innerHTML}`)
//   })
// })

//------------------------------------------------------------

document.addEventListener('click', e => {
  if(e.target.matches("button")) 
  console.log("Clicked Button")
})

const newButton = document.createElement("button")
newButton.innerText = "Button 5"
document.body.append(newButton)

//------------------------------------------------------------

// document.addEventListener('click', e => {
//   if(e.target.matches(".cool")) 
//   console.log("Clicked Button")
// })

// const newButton = document.createElement("button")
// newButton.innerText = "Button 5"
// document.body.append(newButton)
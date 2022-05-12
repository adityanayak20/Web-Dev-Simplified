const buttons = document.querySelectorAll('button')

buttons.forEach( (button) => {
  button.addEventListener('click', () => {
    button.dataset.clicks = ++button.dataset.clicks
  })
})

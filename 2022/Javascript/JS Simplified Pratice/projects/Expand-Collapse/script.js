const expandButtons  = [...document.querySelectorAll(".expand-button")]

expandButtons.forEach(expandButton => {
  expandButton.addEventListener('click', e => {
    const card = e.target.closest(".card")
    const cardBody = card.querySelector(".card-body")
    cardBody.classList.toggle("show")
    e.target.innerText = e.target.innerText === "Expand" ? "Collapse" : "Expand"
  })
})
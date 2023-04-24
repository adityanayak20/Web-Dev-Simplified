const button = document.querySelector("button")

button.addEventListener("click", async () => {
  try {
    const response = await fetch("/create-checkout-session", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            items: [
              { id: 1, quantity: 3 },
              { id: 2, quantity: 1 },
            ],
          }),
        })
  
    if(!response.ok) {
      throw new Error(`An error has occured: ${response.status}`)
    }
    
    const {url} = await response.json()
    window.location = url
  } catch (e) {
    console.err(e.error)
  }
})




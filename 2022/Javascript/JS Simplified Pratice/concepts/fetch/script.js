const URL = "https://jsonplaceholder.typicode.com/posts"

async function doStuff() {
  const response = await fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      title: "New post"
    })
  })
  const post = await response.json()
  console.log(post)
}

doStuff()
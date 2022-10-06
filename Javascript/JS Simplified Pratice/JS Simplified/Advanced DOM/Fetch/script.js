// const URL = "https://jsonplaceholder.typicode.com/users"

// async function doStuff() {
//   try {
//     const response = await fetch(URL, {method: "GET"})
//     if (response.ok) {
//       const users = await response.json()
//       console.log(users)
//     } else {
//       console.log("FAILURE")
//     }
//   } catch (e) {
//     console.error(e)
//   }
// }

// doStuff()

//---------------------------------------------------------

// const URL = "https://jsonplaceholder.typicode.com/posts"

// async function doStuff() {
//   const response = await fetch(URL, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify({
//       title: "New post"
//     })
//   })
//   const post = await response.json()
//   console.log(post)
// }

// doStuff()

//---------------------------------------------------------

const URL = "https://jsonplaceholder.typicode.com/comments?postId=1"

fetch(URL).then(res => res.json())
          .then(comments => console.log(comments))
          .catch(e => console.error(e))
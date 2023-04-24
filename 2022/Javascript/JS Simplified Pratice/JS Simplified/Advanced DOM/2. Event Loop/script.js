function test() {
  console.log("hi 1")
  console.log("hi 2")
  setTimeout(() => console.log("setTimeout 1"), 2000)
  Promise.resolve("Promise 1").then(msg => console.log(msg))
  setTimeout(() => console.log("setTimeout 2"), 0)
  Promise.resolve("Promise 2").then(msg => console.log(msg))
  console.log("hi 3")
}

test()

console.log("hi 4")
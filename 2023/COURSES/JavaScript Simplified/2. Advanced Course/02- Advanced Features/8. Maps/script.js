// const obj = {
//   a: 1,
//   b: 2,
//   c: 3,
//   d: 4
// }

// Object.entries(obj).forEach(([key, value]) => {
//   console.log(`${key} ${value}`)
// })

const items = new Map()

items.set(1, {id: 1, name: "Test 1", description: "Desc 1"})
     .set(2, {id: 2, name: "Test 2", description: "Desc 2"})
     .set(3, {id: 3, name: "Test 3", description: "Desc 3"})

function getItem(id) {
  return items.get(id)
}

console.log(getItem(2))
console.log(items)

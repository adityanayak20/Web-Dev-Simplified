function removeDups(array) {
  return [...new Set(array)]
}

console.log(removeDups([1,2,2,3,4,4,4,4,5]))
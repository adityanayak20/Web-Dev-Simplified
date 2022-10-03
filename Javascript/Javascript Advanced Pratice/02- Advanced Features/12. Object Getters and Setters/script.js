const person = {
  age: 22,
  get birthYear() {
    currentYear = new Date().getFullYear()
    this._birthYear = currentYear - this.age
    return this._birthYear
  }
}

console.log(person.age)
console.log(person.birthYear)

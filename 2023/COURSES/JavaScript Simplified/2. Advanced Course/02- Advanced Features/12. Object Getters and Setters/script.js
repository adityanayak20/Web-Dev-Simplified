const person = {
  age: 22,
  get birthYear() {
    currentYear = new Date().getFullYear()
    this._birthYear = currentYear - this.age
    return this._birthYear
  },
  get location() {
    return this._location
  },
  set location(location) {
    this._location = location
  }
}

console.log(person.age)
console.log(person.birthYear)

person.location = "Agra"

console.log(person.location)

console.log(person)

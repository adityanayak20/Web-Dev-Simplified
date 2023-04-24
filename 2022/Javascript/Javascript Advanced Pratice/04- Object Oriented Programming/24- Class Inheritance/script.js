class Person {
  constructor(name) {
    this.name = name
  }
}
class Janitor extends Person {
  constructor(name, nummberOfMops) {
    super(name)
    this.nummberOfMops = nummberOfMops
  }

  clean() {
    console.log(`Cleaned with $ ${this.nummberOfMops} mops`)
  }
}

const janitor = new Janitor('Jerry', 5)
janitor.clean()
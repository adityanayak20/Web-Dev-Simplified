// User using prototype

// function User(email, password, language) {
//   this.email = email
//   this.password = password
//   this.language = language
// }

// User.prototype.printPassword = function() {
//   console.log(this.password)
// }

// const user  = new User('test@test.com', 'password', 'English')
// console.log(user)

// User using class

class User {
  constructor(email, password, language) {
    this.email = email
    this.password = password
    this.language = language
  }

  printPassword() {
    console.log(this.password)
  }

  get name() {
    return this.email.split('@')[0]
  }

  set name(value) {
    const [, suffix] = this.email.split('@')
    this.email = value + '@' + suffix
  }

}

const user  = new User('test@test.com', 'password', 'English')
user.name = 'kyle'
console.log(user.name)
console.log(user.email)
console.log(user)
  
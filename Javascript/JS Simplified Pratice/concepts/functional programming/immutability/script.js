const person = {
  name: 'Kyle',
  friends: ['John', 'Sally'],
  address: {
    street: '1234'
  }
}

const newPerson = Object.freeze({ ...person, address: { ...person.address, street: '1' } })

console.log(person)
console.log(newPerson)
console.log(person)



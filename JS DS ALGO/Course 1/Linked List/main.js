const {Node, DoublyLinkedList} = require('./DoublyLinkedList')

const DL = new DoublyLinkedList()
DL.addToHead(200)
DL.addToHead(100)
DL.addToTail(300)
DL.addToTail(400)
DL.addToTail(500)
DL.addToTail(300)
DL.addToTail(300)
DL.addToTail(600)

DL.print()
console.log()
console.log(`Length of current Doubly Linked List is ${DL.size()}`)
console.log(`\nAfter removal of ${DL.removeHead()} & ${DL.removeTail()}`)
DL.print()
console.log()
console.log(`Length of current Doubly Linked List is ${DL.size()}`)

console.log()

const searchValue = 300
console.log(`Element of value ${searchValue} is at index ${DL.indexOf(searchValue)}`)
console.log(`All elements of value ${searchValue} is at indexs of ${DL.indexOfAll(searchValue)}`)


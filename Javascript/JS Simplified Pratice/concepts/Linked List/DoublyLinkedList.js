class Node {
  constructor(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addToHead(value) {
    let newNode = new Node(value, this.head, null)

    if(this.head) this.head.prev = newNode
    else this.tail = newNode

    this.head = newNode
  }
  
  addToTail(value) {
    let newNode = new Node(value, null, this.tail)

    if(this.tail) this.tail.next = newNode
    else this.head = newNode

    this.tail = newNode
  }
  
  removeHead() {
    if(!this.head) return null 
    const val = this.head.value
    this.head = this.head.next
    if(this.head) this.head.prev = null
    else this.tail = null 

    return val
  }

  removeTail() {
    if(!this.tail) return null
    const val = this.tail.value
    this.tail = this.tail.prev
    if(this.tail) this.tail.next = null
    else this.head = null
    
    return val
  }

  print() {
   if(this.head == null) console.log(`EMPTY LINKED LIST`)
  
   let current = this.head

   while(current) {
    process.stdout.write(`${current.value}--> `)
    current = current.next
   }
   process.stdout.write(`null`)
  }

  indexOf(value) {
    let current = this.head
    let index = 0

    while(current) {
      if(current.value == value) return index
      current = current.next
      ++index
    }
    return -1
  }

  indexOfAll(value) {
    let current = this.head
    let index = 0
    let ans = []

    while(current) {
      if(current.value == value) ans.push(index)
      current = current.next
      ++index
    }
    return ans
 }

 size() {
   if(!this.head) return 0
   let current = this.head
   let length = 0

   while(current) {
     ++length 
     current = current.next
   }

   return length
 }

}

module.exports = {Node, DoublyLinkedList}

"use strict";

var _require = require('DoublyLinkedList'),
    Node = _require.Node,
    DoublyLinkedList = _require.DoublyLinkedList;

var DL = new DoublyLinkedList();
DL.addToHead(200);
DL.addToHead(100);
DL.addToTail(300);
DL.addToTail(400);
DL.addToTail(500);
DL.addToTail(300);
DL.addToTail(300);
DL.addToTail(600);
DL.print();
console.log();
console.log("Length of current Doubly Linked List is ".concat(DL.size()));
console.log("\nAfter removal of ".concat(DL.removeHead(), " & ").concat(DL.removeTail()));
DL.print();
console.log();
console.log("Length of current Doubly Linked List is ".concat(DL.size()));
console.log();
var searchValue = 300;
console.log("Element of value ".concat(searchValue, " is at index ").concat(DL.indexOf(searchValue)));
console.log("All elements of value ".concat(searchValue, " is at indexs of ").concat(DL.indexOfAll(searchValue)));
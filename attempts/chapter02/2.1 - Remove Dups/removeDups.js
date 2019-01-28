// Write code to remove duplicates from an unsorted linked list.

var LinkedList = function(value) {
  this.value = value;
  this.next = null;
};

var checkDups = function(head, node) {};

var removeDups = function(head) {
  var node = head;

  // if (head.value === ) {

  // }
};

var printLinkedList = function(head) {};

var a = new LinkedList('a');
var b = new LinkedList('b');
var c = new LinkedList('b');
var d = new LinkedList('c');

a.next = b;
b.next = c;
c.next = d;

// console.log(a);
removeDups(a);
printLinkedList(a);

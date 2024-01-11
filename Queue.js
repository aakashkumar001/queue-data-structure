const fs = require("fs");

// A queue is a type of list where data are inserted at the end and are removed from the
// front. Queues are used to store data in the order in which they occur, as opposed to a
// stack, in which the last piece of data entered is the first element used for processing.
// Think of a queue like the line at your bank, where the first person into the line is the
// first person served, and as more customers enter a line, they wait in the back until it is
// their turn to be served.
// A queue is an example of a first-in, first-out (FIFO) data structure. Queues are used to
// order processes submitted to an operating system or a print spooler, and simulation
// applications use queues to model scenarios such as customers standing in the line at a
// bank or a grocery store.

// Queue Operations

// The two primary operations involving queues are inserting a new element into a queue
// and removing an element from a queue. The insertion operation is called enqueue, and
// the removal operation is called dequeue. The enqueue operation inserts a new element
// at the end of a queue, and the dequeue operation removes an element from the front of
// a queue.

// An Array-Based Queue Class Implementation

function Queue() {
  this.dataStore = [];
  this.enqueue = enqueue;
  this.dequeue = dequeue;
  this.front = front;
  this.back = back;
  this.toString = toString;
  this.empty = empty;
}

function enqueue(element) {
  this.dataStore.push(element);
}

function dequeue() {
  return this.dataStore.shift();
}

function front() {
  return this.dataStore[0];
}
function back() {
  return this.dataStore[this.dataStore.length - 1];
}
function toString() {
  var retStr = "";
  for (var i = 0; i < this.dataStore.length; i++) {
    retStr += this.dataStore[i] + "\n";
  }
  return retStr;
}
function empty() {
  if (this.dataStore.length == 0) {
    return true;
  } else {
    return false;
  }
}



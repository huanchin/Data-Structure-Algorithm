class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// FILO
class Stack {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  push(value) {
    let newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let currentNode = this.head;
      while (currentNode.next !== null) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }
    this.length++;
  }

  pop() {
    if (this.length === 0) {
      return null;
    } else if (this.length === 1) {
      const temp = this.head;
      this.head = null;
      this.length--;
      return temp;
    } else {
      let currentNode = this.head;
      for (let i = 1; i < this.length - 1; i++) {
        currentNode = currentNode.next;
      }
      const temp = currentNode.next;
      currentNode.next = null;
      this.length--;
      return temp;
    }
  }

  get(index) {
    if (index > this.length - 1 || index < 0) {
      return null;
    }
    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }
    return currentNode.value;
  }

  printAll() {
    if (this.length === 0) {
      console.log("Nothing in this stack.");
      return;
    }
    let currentNode = this.head;
    while (currentNode !== null) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
  }
}

const myStack = new Stack();
myStack.push("James");
myStack.push("Harry");
myStack.pop();
myStack.push("Kevin");
myStack.printAll();

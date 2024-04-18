class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
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

  unshift(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      const temp = this.head;
      this.head = newNode;
      // newNode.next = temp;
      this.head.next = temp;
    }
    this.length++;
  }

  shift() {
    if (!this.head) return null;
    else if (this.length === 1) {
      const temp = this.head;
      this.head = null;
      this.length--;
      return temp;
    } else {
      const temp = this.head;
      this.head = this.head.next;
      this.length--;
      return temp;
    }
  }

  insertAt(index, value) {
    if (index > this.length - 1 || index < 0) {
      return null;
    } else if (index === 0) {
      this.unshift(value);
      return;
    } else if (index === this.length - 1) {
      this.push(value);
      return;
    }

    const newNode = new Node(value);
    let currentNode = this.head;
    for (let i = 1; i < index; i++) {
      currentNode = currentNode.next;
    }
    newNode.next = currentNode.next;
    currentNode.next = newNode;
    this.length++;
    return;
  }

  removeAt(index) {
    if (index > this.length - 1 || index < 0) {
      return null;
    } else if (index === 0) {
      this.shift();
      return;
    } else if (index === this.length - 1) {
      this.pop();
      return;
    }

    let currentNode = this.head;
    for (let i = 1; i < index; i++) {
      currentNode = currentNode.next;
    }
    const temp = currentNode.next;
    currentNode.next = currentNode.next.next;
    this.length--;
    return temp.value;
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
      console.log("Nothing in this linked list.");
      return;
    }
    let currentNode = this.head;
    while (currentNode !== null) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
  }
}

let myLinkedList = new LinkedList();
myLinkedList.push("Mike");
myLinkedList.push("Harry");
myLinkedList.push("James");
console.log(myLinkedList.get(2));
// myLinkedList.push("Harry");
// myLinkedList.push("James");
// myLinkedList.push("Kevin");
// myLinkedList.insertAt(2, "Ariel");
// console.log(myLinkedList.removeAt(2));
// myLinkedList.printAll();

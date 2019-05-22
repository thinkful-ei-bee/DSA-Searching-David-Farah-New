class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  } 

  enqueue(item) {
    const newNode = new _Node(item, null);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
  }

  dequeue() {
    const item = this.first;

    if (item.next) {
      this.length--;
      this.first = item.next;
      return item.value;
    } else {
      this.first = null;
      this.last = null;
      this.length = 0;
      if (item) {return item.value;}
    }
  }
}

module.exports = Queue;
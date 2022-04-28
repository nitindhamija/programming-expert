// structure and boilerplate code

const createLinkedList = (arr) => {
  let head = null;
  let prev = null;
  arr.forEach((e, i) => {
    let n = new ListNode(e, null);
    if (head == null) head = n;
    if (prev != null) prev.next = n;
    prev = n;
  });
  return head;
};

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

class Stack {
  items = [];
  push = (element) => this.items.push(element);
  pop = () => this.items.pop();
  peek = () => this.items[this.items.length - 1];
  isempty = () => this.items.length === 0;
  empty = () => (this.items.length = 0);
  size = () => this.items.length;
}

const rotate = (head, k) => {
  if (head === null) return head;
  let noOfnodes = 0;
  let counter = head;
  while (counter !== null) {
    noOfnodes++;
    counter = counter.next;
  }
  k = k % noOfnodes;
  let nodeIndex = Math.abs(noOfnodes - k);
  counter = head;
  let i = 0;
  while (i < nodeIndex - 1) {
    i++;
    counter = counter.next;
  }
  let c = counter.next;
  counter.next = null;
  const stack = new Stack();
  while (c != null) {
    stack.push(c);
    c = c.next;
  }

  while (stack.peek() != null) {
    let node = stack.pop();
    node.next = head;
    head = node;
  }
  return head;
};

//calling code

console.log(rotate(createLinkedList([1, 2, 3, 4, 5]), 2));

console.log(rotate(createLinkedList([0, 1, 2]), 4));

console.log(rotate(createLinkedList([]), 4));

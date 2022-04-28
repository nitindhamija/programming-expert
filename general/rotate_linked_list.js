// structure and boilerplate code

const createLinkedList1 = (arr) => {
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

//main code
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const rotate = (head, k) => {
  if (head === null) return head;
  let noOfnodes = 1;
  let counter = head;
  //let lastNode = null;
  while (counter.next !== null) {
    noOfnodes++;
    //lastNode = counter;
    counter = counter.next;
  }
  if (noOfnodes === 1) return head;
  k = k % noOfnodes;
  k = noOfnodes - k; // this step is done to do left rotation by n-k nodes which will yeild same output as right rotation by k nodes
  if (k === 0 || k === noOfnodes) return head;
  //let nodeIndex = noOfnodes - k;
  let lcounter = head;
  let i = 1;
  while (i < k) {
    i++;
    lcounter = lcounter.next;
  }

  counter.next = head;
  head = lcounter.next;
  lcounter.next = null;
  return head;
};

//calling code

console.log(rotate(createLinkedList1([1, 2, 3, 4, 5]), 7));

console.log(rotate(createLinkedList1([0, 1, 2]), 4));

console.log(rotate(createLinkedList1([1]), 0));

console.log(rotate(createLinkedList1([1]), 1));

console.log(rotate(createLinkedList1([]), 4));

/**there are many ways to solve this problem
 * one algorithm that i have thought of is reversing the linked list using recursion
 * 1. reverse the linkedlist
 * 2. do k=k%n
 * 3. reverse the first k nodes and rest n-k nodes separately
 * 4. merge the linked list now
 */

// right rotation solution
// var rotateRight = function(head, k) {
//   if (head === null) return head;
//    let noOfnodes = 0;
//    let counter = head;
//    let lastNode = null;
//    while (counter !== null) {
//      noOfnodes++;
//      lastNode = counter;
//      counter = counter.next;
//    }
//    if (noOfnodes === 1) return head;
//    k = k % noOfnodes;
//    if (k === 0) return head;
//    let nodeIndex = noOfnodes - k;
//    counter = head;
//    let i = 0;
//    while (i < nodeIndex - 1) {
//      i++;
//      counter = counter.next;
//    }
//    let c = counter.next;
//    counter.next = null;
//    let temp = head;
//    head = c;
//    lastNode.next = temp;
//    return head;
//  };

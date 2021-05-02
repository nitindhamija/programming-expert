function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const pre_order = (root) => {
  if (root !== null) {
    console.log(root.val);
    pre_order(root.left);
    pre_order(root.right);
  }
};

//recursive solution time complexity O(n) space complexity O(n) where n is no of of nodes in tree
const invert_btree = (root) => {
  if (root == null) return null;

  let left = invert_btree(root.left);
  let right = invert_btree(root.right);

  root.left = right;
  root.right = left;
  return root;
};

/**iterative solution time complexity O(n) space complexity O(n) where n is no of of nodes in tree
 * we create a queue to store nodes whose left and right child have not been swapped yet. Initially,
 * only the root is in the queue. As long as the queue is not empty, remove the next node from the queue,
 *  swap its children, and add the children to the queue. Null nodes are not added to the queue. Eventually,
 * the queue will be empty and all the children swapped, and we return the original root.*/

let input_root = new TreeNode(4);
input_root.left = new TreeNode(2);
input_root.right = new TreeNode(7);
input_root.left.left = new TreeNode(1);
input_root.left.right = new TreeNode(3);
input_root.right.left = new TreeNode(6);
input_root.right.right = new TreeNode(9);

pre_order(input_root);
pre_order(invert_btree(input_root));

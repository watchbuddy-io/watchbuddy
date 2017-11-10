/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var kthSmallest = function(root, k) {
  var rank = 0;
  var result = null;

  var _kthSmallest = function(root) {
    if (root.left) {
      _kthSmallest(root.left);
    }

    if (rank === k) {
      result = root.val;
    }
    rank++;

    if (root.right) {
      _kthSmallest(root.right);
    }
  }
  _kthSmallest(root);

  return result;
};

var root = new TreeNode(5);
root.left = new TreeNode(3);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(4);
root.right = new TreeNode(8);
root.right.left = new TreeNode(7);
root.right.right = new TreeNode(9);

console.log(kthSmallest(root, 5));
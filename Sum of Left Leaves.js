/* Find the sum of all left leaves in a given binary tree.

Example:

    3
   / \
  9  20
    /  \
   15   7

There are two left leaves in the binary tree, with values 9 and 15 respectively. Return 24. */

// Solution:

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

 var sumOfLeftLeaves = function(root) {
  var sum =0;
   if (root === null){
     return 0;
   }
   if(root.left!== null && root.left.left === null && root.left.right  === null){
       sum = root.left.val + sumOfLeftLeaves(root.right);
       return sum;
   } else {
       sum = sumOfLeftLeaves(root.left)+sumOfLeftLeaves(root.right);
       return sum;
   }
  
};

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    maxDepth(root) {
        function depth(node){
            if(node === null) return 0;

            let left = depth(node.left);
            let right = depth(node.right);

            return Math.max(left, right) + 1;
        }
       return depth(root);
    }
}

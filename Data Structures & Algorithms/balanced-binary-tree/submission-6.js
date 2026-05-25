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
     * @return {boolean}
     */
    isBalanced(root) {

        const depth = (node) =>{
            if(node === null) return 0;

            let left = depth(node.left);
            if(left === -1) return -1;

            let right = depth(node.right);
            if(right === -1) return -1;

            let diff = Math.abs(left - right);

            if(diff > 1) return -1;

            return Math.max(left,right) + 1;

        }
        return depth(root) !== -1;
    }
}

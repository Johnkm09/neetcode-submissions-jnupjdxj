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
    
    diameterOfBinaryTree(root) {
        let diameter = 0;

        const depth = (n)=>{
            if(n === null) return 0;
            let left = depth(n.left);
            let right = depth(n.right);

            diameter = Math.max(diameter, right + left);
            
            return Math.max(left,right) + 1;
        }
        depth(root);
        return diameter;
    }
}

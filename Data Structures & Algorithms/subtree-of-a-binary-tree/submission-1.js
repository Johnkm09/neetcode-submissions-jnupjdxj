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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        function issame(a,b){
            if((a === null) && (b === null)) return true;
            if((a === null) || (b === null)) return false;

            if(a.val !== b.val) return false;

            return issame(a.left,b.left) && issame(a.right,b.right);
        }
        if (!root) return false;
        if(issame(root,subRoot)) return true;
        return this.isSubtree(root.left, subRoot) || this.isSubtree(root.right, subRoot)
    }
}

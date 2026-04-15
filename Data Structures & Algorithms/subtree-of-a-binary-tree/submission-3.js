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
        function issame(p,q){
            if((p === null) && (q === null)) return true;
            if((p === null) || (q === null)) return false;
            if(p.val !== q.val) return false;
            return issame(p.left,q.left) && issame(p.right,q.right);
        }
        
        if(root === null) return false;
        if(issame(root, subRoot)) return true;

        return this.isSubtree(root.left,subRoot)
        ||this.isSubtree(root.right,subRoot)
    }
}

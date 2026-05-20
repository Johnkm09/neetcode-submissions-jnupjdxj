/**
 * Definition for singly-linked list.
 *  class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        if(!head) return null;
        let arr = [];
        let curr = head;

         while (curr !== null) {
            arr.push(curr);
            curr = curr.next;
        }

        for(let i = arr.length - 1; i > 0; i--){
            arr[i].next = arr[i - 1];
        }

        arr[0].next = null;

        return arr[arr.length - 1];
    }
}

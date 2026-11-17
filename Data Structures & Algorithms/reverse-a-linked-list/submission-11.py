# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        values = []
        while head:
            values.append(head.val)
            head = head.next
            
        values.reverse()

        dummy = ListNode(0)
        current = dummy

        for v in values:
            current.next = ListNode(v)
            current = current.next

        return dummy.next
        
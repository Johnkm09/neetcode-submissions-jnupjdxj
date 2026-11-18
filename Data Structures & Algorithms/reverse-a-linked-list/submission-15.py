# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        #make an empty array
        values = []
        #fill it
        while head:
            values.append(head.val)
            head = head.next
        #reverse the array
        values.reverse()
        #make a new list
        dummy = ListNode(0)
        current = dummy
        #loop the list and fill it
        for val in values:
            current.next = ListNode(val)
            current = current.next
        #return the list
        return dummy.next

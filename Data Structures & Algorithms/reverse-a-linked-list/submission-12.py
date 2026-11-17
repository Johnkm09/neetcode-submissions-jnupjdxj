# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        #create an array to hold values
        values = []
        while head:
            values.append(head.val)
            head = head.next
        #reverse the array
        values.reverse()
        #create newlist
        dummy = ListNode(0)
        #create variable to traverse
        current = dummy
        #loop through
        for value in values:
            current.next = ListNode(value)
            current = current.next
        #return
        return dummy.next
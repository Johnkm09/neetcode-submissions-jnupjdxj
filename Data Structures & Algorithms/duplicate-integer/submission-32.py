class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        #create a set
        seen =  set()
        #loop through the set and check if init,return true if in
        for num in nums:
            if num in seen:
                return True
        #add item to the list if not present
            seen.add(num)
        return False
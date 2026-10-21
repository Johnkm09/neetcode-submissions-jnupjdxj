class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        #create a set
        seen = set()
        #loop through nums
        for x in range(len(nums)):
        #check items in nums,if in set
            if nums[x] in seen:
                #return true if in set
                return True
            else:
                #if not in set,put it in
                seen.add(nums[x])
        #after loop complete return false
        return False
        
class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let seen = {};

        for(let i = 0; i < nums.length; i++){
            if(seen[nums[i]] === undefined){
                seen[nums[i]] = 1;
            }else{
                return true;
            }
        }
        return false;
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
     let mp = {};

     for(let i = 0; i < nums.length; i++){
        let diff = target - nums[i];
//{3:0}
        if(mp[diff] === undefined){
            mp[nums[i]] = i;
        }else{
            return [mp[diff], i]
        }
     }
    }
}

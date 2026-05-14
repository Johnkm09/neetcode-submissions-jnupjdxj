class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        let n = nums.length;
        let actual = 0;
        let expected = (n * (n + 1))/2; 
        for(let i = 0; i < n; i++){
            actual += nums[i];
        }
        return expected - actual;
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    singleNumber(nums) {
        let mp = {};

        for(let i = 0; i < nums.length; i++){
            if(!mp[nums[i]]){
                mp[nums[i]] = 1;
            }else{
                mp[nums[i]] += 1;
            }
        }

        for(let key in mp){
            if(mp[key] === 1){
                return Number(key);
            }
        }
    }
}

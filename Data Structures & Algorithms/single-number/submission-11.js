class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    singleNumber(nums) {
        let mp = {};

        for(let num of nums){
            if(mp[num] === undefined){
                mp[num] = 1;
            }else{
                mp[num] += 1;
            }
        }

        for(let key in mp){
            if(mp[key] === 1){
                return Number(key);
            }
        }
    }
}

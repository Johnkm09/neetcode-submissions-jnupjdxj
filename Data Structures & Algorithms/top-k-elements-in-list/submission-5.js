class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let mp = {};

        for(let i = 0; i < nums.length; i++){
            if(mp[nums[i]] === undefined)
            {
                mp[nums[i]] = 1;
            }else{
                mp[nums[i]] += 1;
            }
        }

        let arr = Object.entries(mp);

        let sortedarr = arr.sort((a,b) => b[1] - a[1]);
        return sortedarr.slice(0,k).map(item=>Number(item[0]));
    }
}

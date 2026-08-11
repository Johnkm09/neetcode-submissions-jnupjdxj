class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const mp = {};

        for(let n of nums)
        {
            if(mp[n] === undefined){
                mp[n] = 1;
            }else{
                mp[n] += 1;
            }
        }

        const arr = Object.entries(mp);

        arr.sort((a, b) => b[1] - a[1]);

        return arr.slice(0, k).map(item => item[0]);
    }
}

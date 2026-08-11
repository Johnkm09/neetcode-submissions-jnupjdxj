class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const mp = new Map();

        for(let nm of nums)
        {
            if(!mp.has(nm))
            {
                mp.set(nm,1);
            }else
            {
                mp.set(nm, mp.get(nm) + 1);
            }
        }

        const buckets = Array.from(
            {length: nums.length + 1},
            () => []
        );

        for(let [num,freq] of mp){
            buckets[freq].push(num);
        }

        const result = [];

        for(let i = buckets.length - 1; i >=0; i--)
        {
            for(let num of buckets[i])
            {
                result.push(num);

                if(result.length === k){
                    return result;
                }
            }
        }
    }
}

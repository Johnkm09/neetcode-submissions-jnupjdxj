class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const mp = new Map();

        for(let str of strs){
            const key = str.split("").sort().join("");

            if(!mp.has(key))
            {
                mp.set(key,[]);
            }

            mp.get(key).push(str);
        }
        return Array.from(mp.values());
    }
}

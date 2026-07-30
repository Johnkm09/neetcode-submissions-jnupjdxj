class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    isAnagram(a, b) {
        if (a.length !== b.length) return false;
        let sortedA = a.split("").sort().join("");
        let sortedB = b.split("").sort().join("");
        return sortedA===sortedB;
    }

    groupAnagrams(strs) {
        let res = [];
        let visited = new Array(strs.length).fill(false);
        for(let i = 0; i < strs.length; i++){
            if(visited[i]) continue;
            let group = [strs[i]];
            visited[i] = true;
            for(let j = i + 1; j < strs.length; j++){
                if(this.isAnagram(strs[i], strs[j])){
                    group.push(strs[j]);
                    visited[j] = true;
                }
            }
            res.push(group);
        }
        
        return res;
    }
}

class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    isAnagram(i,j){
        if(i.length !== j.length) return false;

        return i.split("").sort().join('') === j.split("").sort().join('');
    }
    groupAnagrams(strs) {
        const visited = new Array(strs.length).fill(false);
        const result  = [];

        for(let i = 0; i < strs.length; i++){
            if(visited[i]) continue;

            const group = [];
            group.push([strs[i]]);
            visited[i] = true;

            for(let j = i + 1; j < strs.length; j++){
                if(!visited[j] && (this.isAnagram(strs[i],strs[j]))){
                    group.push(strs[j]);
                    visited[j] = true;
                }
            }
            result.push(group);
        }
        return result;
    }
}

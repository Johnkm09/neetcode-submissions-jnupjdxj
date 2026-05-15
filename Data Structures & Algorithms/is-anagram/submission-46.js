class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;
        let newS = {};
        let newT = {};

        for(let i = 0; i < s.length; i++){
            if(newS[s[i]] === undefined){
                newS[s[i]] = 1;
            }else{
                newS[s[i]] += 1;
            }
        }

        for(let j = 0; j < t.length; j++){
            if(newT[t[j]] === undefined){
                newT[t[j]] = 1;
            }else{
                newT[t[j]] += 1;
            }
        }

        for(let key in newS){
            if(newT[key] !== newS[key]){
                return false;
            }
        }
        return true;
    }
}

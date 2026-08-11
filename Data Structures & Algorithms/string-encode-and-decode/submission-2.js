class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = "";

        for(let st of strs){
            res += st.length + "#" + st;
        }
        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let result = [];
        let i = 0;

        while(i < str.length){
            let j = i;
//5#world
            while(str[j] !== '#'){
                j++;
            }

            const length = Number(str.slice(i,j));

            const st = str.slice(j+1, j + 1 + length);
            result.push(st);

            i = j + 1 + length;
        }
        return result;
    }
}

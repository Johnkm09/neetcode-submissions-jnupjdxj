class Solution {
    /**
     * @param {number} n
     * @return {number[]}
     */
    countBits(n) {
        let output = [];

        for(let i = 0; i <= n; i++){
            let bn = i.toString(2);
            let cnt = 0;

            for(let j = 0; j < bn.length; j++){
                if(bn[j] === '1'){
                    cnt++;
                }
            }
            output.push(cnt);
        }
        return output;
    }
}

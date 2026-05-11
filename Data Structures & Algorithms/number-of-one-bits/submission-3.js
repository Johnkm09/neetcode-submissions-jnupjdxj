class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number}
     */
    hammingWeight(n) {
        let bn = n.toString(2);
        let count = 0;

        for(let i = 0; i < bn.length; i++){
            if(bn[i] === '1'){
                count++;
            }
        }
        return count;
    }
}

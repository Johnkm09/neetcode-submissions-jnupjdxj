class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number}
     */
    hammingWeight(n) {
        let bn = n.toString(2);
        let count = 0;

        for(let i in bn){
            if(bn[i] === '1'){
                count++;
            }
        }
        return count;
    }
}

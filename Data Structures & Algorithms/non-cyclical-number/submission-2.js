class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    isHappy(n) {
        let seen = new Set();

        while(n !== 1 && !seen.has(n)){
            seen.add(n);
            let sum = 0;

            let digit = n.toString();

            for(let i = 0; i < digit.length; i++){
                let d = digit[i];

                sum += d * d;
            }

            n = sum;
        }
        return n === 1;
    }
}

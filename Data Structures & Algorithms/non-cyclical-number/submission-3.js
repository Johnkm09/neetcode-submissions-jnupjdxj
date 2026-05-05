class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    getNext(n){
            let sum = 0;

            while(n > 0){
                let digit = n % 10;
                sum += digit * digit;
                n = Math.floor(n/10);
            }
            return sum;
        }

    isHappy(n) {
        let fast = n;
        let slow = n;

        while(true){
            slow = this.getNext(slow);
            fast = this.getNext(this.getNext(fast));

            if(fast === slow){
                break;
            }
        }
        return slow === 1;
    }
}

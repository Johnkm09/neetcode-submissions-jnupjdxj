class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        let st = {};
        function dps(steps){
            if(steps === n) return 1;
            if(steps > n) return 0;

            if(steps in st){
                return st[steps];
            }

            st[steps] = dps(steps + 1) + dps(steps + 2);
            return st[steps];
        }
        return dps(0);
    }
}

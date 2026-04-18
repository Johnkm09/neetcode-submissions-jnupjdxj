class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        let st = {};
        function dp(steps){
            if(steps === n) return 1;
            if(steps > n) return 0;

            if(steps in st){
                return st[steps];
            }
            st[steps] =  dp(steps + 1) + dp(steps + 2);
            return st[steps];
        }
        return dp(0);
    }
}

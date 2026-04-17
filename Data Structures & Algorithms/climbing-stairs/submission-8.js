class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        const memo = {};
        function upstairs(steps){
            if(steps === n) return 1;
            if(steps > n) return 0;
            
            if(steps in memo){
                return memo[steps];
            }

            memo[steps] = upstairs(steps + 1) + upstairs(steps + 2);
            return memo[steps];
        }
        return upstairs(0);
    }
}

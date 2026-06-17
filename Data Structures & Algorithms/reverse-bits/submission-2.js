class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number} - a positive integer
     */
    reverseBits(n) {
        let binary = n.toString(2);

        binary = binary.padStart(32,0);

        let reversed = binary.split("").reverse().join("");

        return parseInt(reversed,2);
    }
}

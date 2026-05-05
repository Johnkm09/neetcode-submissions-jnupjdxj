class Solution {
    /**
     * @param {number[]} digits
     * @return {number[]}
     */
    plusOne(digits) {
        let num = Number(digits.join(""));
        num = num + 1;

        return num.toString().split("").map(Number);
    }
}

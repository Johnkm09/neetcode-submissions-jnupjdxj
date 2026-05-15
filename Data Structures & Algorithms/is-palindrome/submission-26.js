class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let cleanedS = s.toLowerCase().replace(/[^a-z0-9]/g,'');
        let reversedS = cleanedS.split('').reverse().join('');
        return cleanedS === reversedS;
    }
}

class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let start = 0;
        let end = s.length - 1;

        while(start < end){
            while(start < end && !/[a-z0-9]/i.test(s[start])) start++;
            while(start < end && !/[a-z0-9]/i.test(s[end])) end--;

            if(s[start].toLowerCase() !== s[end].toLowerCase()){
                return false;
            }else{
                start++;
                end--;
            }
        }
        return true;
    }
}

class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let st = [];
        let pairs = {
            ')': '(',
            ']': '[',
            '}': '{'
        }

        for(let i = 0; i < s.length; i++){
            if(s[i] === '(' ||
                s[i] === '{' ||
                s[i] === '['
            ){
                st.push(s[i]);
            }else{
                let top = st.pop();

                if(top !== pairs[s[i]]){
                    return false;
                }
            }
            
        }
        return st.length === 0;
    }
}

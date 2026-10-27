class Solution:
    def isPalindrome(self, s: str) -> bool:
        cleaned = ""

        for char in s:
            if char.isalnum():
                cleaned += char.lower()

        reversed_string = ""
        for char in cleaned:
            reversed_string = char + reversed_string 
        
        return cleaned == reversed_string 
        
class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        dict = {
            ")": "(",
            "}":"{",
            "]":"["
         }

        for char in s:
            if char in "({[":
                stack.append(char)
            else:
                if not stack:
                    return False
                top = stack.pop()
                if top != dict[char]:
                    return False

        return len(stack) == 0
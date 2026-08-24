class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        smp = {}
        tmp = {}

        for i in range(len(s)):
            if s[i] in smp: 
                smp[s[i]] += 1
            else:
                smp[s[i]] = 1

        for i in range(len(t)):
            if t[i] in tmp: 
                tmp[t[i]] += 1
            else:
                tmp[t[i]] = 1

        return smp == tmp
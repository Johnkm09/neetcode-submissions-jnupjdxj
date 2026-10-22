class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False
        smap = {}
        tmap = {}

        for x in s:
            if x in smap:
                smap[x] += 1
            else:
                smap[x] = 1

        for x in t:
            if x in tmap:
                tmap[x] += 1
            else:
                tmap[x] = 1
        return smap == tmap
        
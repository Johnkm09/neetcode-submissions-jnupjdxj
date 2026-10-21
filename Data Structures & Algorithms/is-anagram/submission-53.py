class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        #make 2 maps
        smap = {}
        tmap = {}
        #start with s, loop, check is map has the item
        for x in s:
            if x in smap:
                #if it exists increment the count
                smap[x] +=1
            else:
                #if not add the item with key of 1
                smap[x] = 1
        
        
        #do same to t
        for x in t:
            if x in tmap:
                #if it exists increment the count
                tmap[x] +=1
            else:
                #if not add the item with key of 1
                tmap[x] = 1
        #compare both maps
        #return true if the match
        return smap == tmap
        
        
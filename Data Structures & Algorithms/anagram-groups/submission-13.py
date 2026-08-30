class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        #["act","pots","tops","cat","stop","hat"]
        visited = {}

        for word in strs:
            sortedi = tuple(sorted(word))
            if sortedi in visited:
                visited[sortedi].append(word)
            else:
                visited[sortedi] = [word]
        return list(visited.values())
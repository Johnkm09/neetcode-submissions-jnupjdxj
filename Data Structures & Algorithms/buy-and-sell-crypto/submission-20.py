class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        #[10,1,5,6,7,1]
        minPrice = prices[0]
        maxProfit = 0

        for price in prices:
            minPrice = min(minPrice, price)
            profit = price - minPrice
            maxProfit = max(maxProfit, profit)
        return maxProfit
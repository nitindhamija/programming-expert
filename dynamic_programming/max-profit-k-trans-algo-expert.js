/**
 * This problem can be solved using DP i.e as shown in table below
 * k ->  no of transaction, prices -> array of stock prices on day 0 to d
 *
 *          stock prices on day 0 to d
 *      d=1   d=2     d=3     d=4     d=5     d=6
 *       5     11      3       50      60      90
 *
 * k=0   0      0      0        0       0       0
 *
 * k=1   0      6       6       47      57      87
 *
 * k=2   0      6       6       53      63      93
 *
 * here at k=0  and for d=1 i.e without any transaction max profit will always be 0, also at day 1 you can only buy
 * and sell at the same price so max profit will always be 0
 * now here from the table above we can see that 93 is the max profit with 2 transaction, now let's check if there's some
 * pattern and and come up with some formula
 *
 * let's check for k=2,d=6 in the table i.e for 2nd transaction at day 6 we have only 2 choices,
 * either we do the transaction or we don't and max of these choices would be the max profit at that
 * day d and transaction k
 *
 * now let's take first choice that we don't do the transaction i.e profit at previous day with k trans
 * would still be the max profit i.e profit[k][d-1]
 *
 * now the second choice where we do the transaction, in this case profit would be
 * price[d] + max(profit[k-1][x]-price[x]) where 0 <= x < d i.e
 * for x=0,1 ....d-1 we will compute the max(profit[k-1][x]-price[x]) i.e is adding n time complexity for each n*k operation
 *
 * so finally we can say that max profit with k trans at day d would be
 * profit[k][d] = max(profit[k][d-1],price[d]+max(profit[k-1][x]-price[x]))
 * where 0 <= x < d
 *
 * now from above explaination we can see the time complexity is o(n*n*k) i.e for second choice
 * we are doing n operation to find the max profit on previous transaction at previous day
 * but we avoided n comparsion for each profit matrix element by
 * storing and updating the maxthusfar value at each element so our time complexity is o(n*k)
 * and space complexity is simply O(n*k) **/
const maxProfit = (k, price) => {
  let days = price.length;
  if (days === 0) return "not possible";
  let maxThusFar;
  var profit = new Array(k + 1).fill(0).map(() => new Array(days).fill(0));

  for (let i = 1; i < k + 1; i++) {
    maxThusFar = -Number.MAX_VALUE;
    for (let j = 1; j < days; j++) {
      maxThusFar = max(maxThusFar, profit[i - 1][j - 1] - price[j - 1]);
      profit[i][j] = max(profit[i][j - 1], price[j] + maxThusFar);
    }
  }
  console.log(profit);
  return profit[k][days - 1]; //last element of 2-d array will be the max profit
};

const max = (a, b) => {
  return a > b ? a : b;
};

console.time("rec time");
console.log(maxProfit(2, [5, 11, 3, 50, 60, 90])); //93
console.log(maxProfit(2, [10, 22, 5, 75, 65, 80])); //87
console.log(maxProfit(3, [12, 14, 17, 10, 14, 13, 12, 15])); //12
console.log(maxProfit(3, [100, 30, 15, 10, 8, 25, 80])); //72
console.log(maxProfit(1, [90, 80, 70, 60, 50])); //0
console.log(maxProfit(1, []));

/**now further we can improve the space complexity from o(n*k) to o(n)
 * let observe the formula at any day d for trans k we are only accessing k-1 row values i.e only current and last row
 * are needed at any time so instead of storing the full 2-d array of k*n value we can only store 2 rows and keep
 * swaping/updating them as we move further down the transaction lane
 */

const maxProfitImproved = (k, price) => {
  let days = price.length;
  if (days === 0) return "not possible";
  let evenProfit = new Array(days).fill(0); // when k is even
  let oddProfit = new Array(days).fill(0); // when k is odd
  let currentProfits;
  let previousProfits;

  for (let i = 1; i < k + 1; i++) {
    maxThusFar = -Number.MAX_VALUE;
    // here we are swapping the current and previous profit row based on whether it is an even or odd transaction
    if (i % 2 === 1) {
      currentProfits = oddProfit;
      previousProfits = evenProfit;
    } else {
      currentProfits = evenProfit;
      previousProfits = oddProfit;
    }
    for (let j = 1; j < days; j++) {
      maxThusFar = max(maxThusFar, previousProfits[j - 1] - price[j - 1]);
      currentProfits[j] = max(currentProfits[j - 1], price[j] + maxThusFar);
    }
  }
  console.log(currentProfits);
  return currentProfits[days - 1];
};

console.log(maxProfitImproved(2, [5, 11, 3, 50, 60, 90])); //93
console.log(maxProfitImproved(2, [10, 22, 5, 75, 65, 80])); //87
console.log(maxProfitImproved(3, [12, 14, 17, 10, 14, 13, 12, 15])); //12
console.log(maxProfitImproved(3, [100, 30, 15, 10, 8, 25, 80])); //72
console.log(maxProfitImproved(1, [90, 80, 70, 60, 50])); //0
console.log(maxProfitImproved(1, []));

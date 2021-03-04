/** brute force
 * time complexity O(n^m*m)
 * space complexity O(m*m)
 *
 * memoized
 * time complexity (m^2*n)
 * space complexity O(m^2)
 * [5, 11, 3, 50, 60, 90] k=2
 */
const maxProfitKTrans = (k, numbers, end = 0, profit = 0, mem = {}) => {
  let maxProfit = 0;
  let len = numbers.length;
  if (k === 0) return profit;
  if (end >= len) return null;

  //k = k - 1;
  //end = end + 2;
  for (let i = end + 1; i < len; i++) {
    //let p = numbers[end + 1] - numbers[end];
    let possibleProfit = maxProfitKTrans(
      k - 1,
      numbers,
      end + i + 1,
      numbers[i] - numbers[end],
      mem
    );

    if (possibleProfit !== null) {
      maxProfit = max(maxProfit, possibleProfit);
    }
  }

  return profit + maxProfit;
};

const max = (mp, pp) => {
  return mp > pp ? mp : pp;
};

console.time("rec time");
console.log(maxProfitKTrans(2, [5, 11, 3, 50, 60, 90])); //93
console.log(maxProfitKTrans(2, [10, 22, 5, 75, 65, 80])); //93
console.log(maxProfitKTrans(3, [12, 14, 17, 10, 14, 13, 12, 15])); //93
console.log(maxProfitKTrans(3, [100, 30, 15, 10, 8, 25, 80])); //93
console.log(maxProfitKTrans(1, [90, 80, 70, 60, 50])); //93

console.timeLog("rec time");

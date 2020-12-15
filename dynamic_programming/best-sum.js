/** brute force
 * time complexity O(n^m*m)
 * space complexity O(m*m)
 *
 * memoized
 * time complexity (m^2*n)
 * space complexity O(m^2)
 */
const bestSum = (targetSum, numbers, mem = {}) => {
  let shortestPath = null;
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;
  if (targetSum in mem) return mem[targetSum];

  for (let n of numbers) {
    let possiblePath = bestSum(targetSum - n, numbers, mem);
    if (possiblePath !== null) {
      shortestPath = min(shortestPath, [...possiblePath, n]);
    }
  }
  mem[targetSum] = shortestPath;
  return shortestPath;
};

const min = (shortestPath, possible) => {
  if (shortestPath === null) return possible;
  else return shortestPath.length > possible.length ? possible : shortestPath;
};

console.time("rec time");
console.log(bestSum(7, [5, 3, 4, 7])); //[7]
console.log(bestSum(8, [2, 3, 5])); //[3,5]
console.log(bestSum(8, [1, 4, 5])); //[4,4]
console.log(bestSum(100, [1, 2, 5, 25])); //[25,25,25,25]

console.timeLog("rec time");

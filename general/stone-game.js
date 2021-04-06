/**https://www.geeksforgeeks.org/optimal-strategy-for-a-game-dp-31/
 * for problem description and solution refer geekforgeeks and leet code
 * https://leetcode.com/problems/stone-game/submissions/
 */

const stoneGame = (piles) => {
  const len = piles.length;
  //here array 2 is added to array length as from the formula we can see we are accessing i+2
  //so to avoid checking i+2<=j at each step
  let table = Array(len + 2)
    .fill(0)
    .map(() => Array(len + 2).fill(0));
  //here table is filled diagnoly to table[0][len-1] only
  for (let p = 0; p < len; ++p) {
    for (let i = 0, j = p; j < len; ++i, ++j) {
      let x = table[i + 2][j]; //if user chooses ith and opponent chooses i+1th pile
      let y = table[i + 1][j - 1]; // if user chooses ith and opponent chooses jth pile
      let z = table[i][j - 2]; // if user choses jth and opponent chooses jth pile
      // when user choose ith then opponent will try to minimize user's value from next move i.e min(x,y)
      // similary when user choose jth then min(y,z)
      //now max of these 2 choices will be max output
      table[i][j] = max(piles[i] + min(x, y), piles[j] + min(y, z));
    }
  }
  let sum = piles.reduce((acc, curr_val) => {
    return acc + curr_val;
  });
  return table[0][len - 1] > sum / 2 ? true : false;
};

const max = (a, b) => {
  return a > b ? a : b;
};
const min = (a, b) => {
  return a > b ? b : a;
};

console.log(stoneGame([5, 3, 4, 5]));
console.log(stoneGame([8, 15, 3, 7]));
console.log(stoneGame([2, 2, 2, 2]));
console.log(stoneGame([20, 30, 2, 2, 2, 10]));

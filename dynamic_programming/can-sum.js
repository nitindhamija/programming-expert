/**
 *
 * @param {*} targetSum
 * @param {*} numbers array of non-negative numbers
 * space time complexity First visualize this problem in tree format let's assume targetSum -> m and len of array is nnow for space
 * complexity let's calculate the height, since space complexity is stacks in a path from root to leaf node in worst case
 * i.e targetSum=7 array=[1,1,1,1,1,1,1] i.e doing 7-1 m times to make it 0 so we have height of tree = m  for time complexity
 * let's calculate no of recursive function calls or no of nodes so no of nodes at level 0  *  no of nodes at level 1 * no of nodes
 * at level 2 ...  node of nodes at level m i.e 1*n*n*...*n i.e multiplying n m times which is n^m*/

const canSum = (targetSum, numbers) => {
  if (targetSum === 0) return true; //ideal base case since this case means recursion path has the sum which is matching target sum
  if (targetSum < 0) return false; // case where target sum no has become -ve in recursion calls and hence no need to dig deeper for a match
  for (let n of numbers) {
    //loop through the array of numbers and divide the prob in sub-problems using remainder i.e targetSum - n
    if (canSum(targetSum - n, numbers) === true) return true; // if we find any possible combination of numner where number's sum matches the targetSum we immediatly return true and skip further combinations
  }
  return false;
};

console.time("rec time");
console.log(canSum(7, [5, 3, 4, 7]));
console.log(canSum(7, [2, 4]));
console.log(canSum(8, [2, 3, 5]));
console.log(canSum(300, [7, 14]));
console.timeLog("rec time");

/** space time complexity 
First visualize this problem in tree format 
let's assume targetSum -> m and len of array is n
now for space complexity let's calculate the height, since space complexity is stacks in a path from root to leaf node
in worst case i.e targetSum=7 array=[1,1,1,1,1,1,1] i.e doing 7-1 m times to make it 0 so we have
height of tree = m 
for time complexity let's calculate no of recursive function calls 
here because of the memoisation we have reduced no fo recursive calls i.e avoided recursion calls for duplicate subtree
so time complexity is m*n

*/
const canSumDP = (targetSum, numbers, memo = {}) => {
  if (targetSum === 0) return true; //ideal base case since this case means recursion path has the sum which is matching target sum
  if (targetSum < 0) return false; // case where target sum no has become -ve in recursion calls and hence no need to dig deeper for a match
  if (targetSum in memo) return memo[targetSum];
  for (let n of numbers) {
    //loop through the array of numbers and divide the prob in sub-problems using remainder i.e targetSum - n
    if (canSumDP(targetSum - n, numbers, memo) === true) {
      memo[targetSum] = true;
      return true; // if we find any possible combination of numner where number's sum matches the targetSum we immediatly return true and skip further combinations
    }
  }
  memo[targetSum] = false;
  return false;
};

console.time("dp time");
console.log(canSumDP(7, [5, 3, 4, 7])); //true
console.log(canSumDP(7, [2, 4])); //false
console.log(canSumDP(8, [2, 3, 5])); //true
console.log(canSumDP(300, [7, 14])); //false
console.timeLog("dp time");

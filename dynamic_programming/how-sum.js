/* space time complexity 
First visualize this problem in tree format 
let's assume targetSum -> m and len of array is n
now for space complexity let's calculate the height, since space complexity is stacks in a path from root to leaf node
in worst case i.e targetSum=7 array=[1,1,1,1,1,1,1] i.e doing 7-1 m times to make it 0 so we have
height of tree = m 
for time complexity let's calculate no of recursive function calls or no of nodes 
so no of nodes at level 0  *  no of nodes at level 1 * no of nodes at level 2 ...  node of nodes at level m
i.e 1*n*n*...*n i.e multiplying n m times which is n^m
*/
const howSum = (targetSum, numbers) => {
  if (targetSum === 0) return []; //ideal base case since this case means recursion path has the sum which is matching target sum
  if (targetSum < 0) return null; // case where target sum no has become -ve in recursion calls and hence no need to dig deeper for a match
  for (let n of numbers) {
    //loop through the array of numbers and divide the prob in sub-problems using remainder i.e targetSum - n
    let possiblePath = howSum(targetSum - n, numbers);
    if (possiblePath !== null) {
      return [...possiblePath, n]; // if we find any possible combination of numner where number's sum matches the targetSum we immediatly return true and skip further combinations
    }
  }

  return null;
};

console.time("rec time");
console.log(howSum(7, [5, 3, 4, 7]));

console.log(howSum(7, [2, 4]));
console.log(howSum(8, [2, 3, 5]));
console.log(howSum(300, [7, 14]));
console.timeLog("rec time");
/* space time complexity 
First visualize this problem in tree format 
let's assume targetSum -> m and len of array is n
now for space complexity let's calculate the height, since space complexity is stacks in a path from root to leaf node
in worst case i.e targetSum=7 array=[1,1,1,1,1,1,1] i.e doing 7-1 m times to make it 0 so we have
height of tree = m 
for time complexity let's calculate no of recursive function calls 
here because of the memoisation we have reduced no fo recursive calls i.e avoided recursion calls for duplicate subtree
so time complexity is m*n
*/
const howSumDP = (targetSum, numbers, mem = {}) => {
  if (targetSum === 0) return []; //ideal base case since this case means recursion path has the sum which is matching target sum
  if (targetSum < 0) return null; // case where target sum no has become -ve in recursion calls and hence no need to dig deeper for a match
  if (targetSum in mem) return mem[targetSum]; // checking and returning the value of subproblem if it has already been solved i.e in tree visulization a similar subtree has already traversed and we know what if would return
  for (let n of numbers) {
    //loop through the array of numbers and divide the prob in sub-problems using remainder i.e targetSum - n
    let possiblePath = howSumDP(targetSum - n, numbers, mem); // return null or []
    if (possiblePath !== null) {
      // if found a possible path
      let temp = [...possiblePath, n]; //create a new arry using returned arry possiblePath and appending n from array in it
      mem[targetSum] = temp; //store the result of subproblem in to the mem object
      return temp; // if we find any possible combination of numner where number's sum matches the targetSum we immediatly return true and skip further combinations
    }
  }
  mem[targetSum] = null; //store null as a way to share no combination possible for targetSum
  return null;
};

console.time("rec time dp");
console.log(howSumDP(7, [5, 3, 4, 7]));

console.log(howSumDP(7, [2, 4]));
console.log(howSumDP(8, [2, 3, 5]));
console.log(howSumDP(900, [7, 14]));
console.timeLog("rec time dp");

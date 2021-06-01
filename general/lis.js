/** solution to longest increasing subsequence
 * recursive memoisation solution with time complexity O(n^2) and space complexity O(n^2) */

const lis = (nums) => {
  var memo = new Array(nums.length + 1)
    .fill(-1)
    .map(() => new Array(nums.length).fill(-1));
  //console.log(memo);
  let s = lengthofLIS(nums, -1, 0, memo);
  //console.log(memo);
  return s;
};

function lengthofLIS(nums, prev, curr, memo) {
  if (curr === nums.length) return 0;

  if (memo[prev + 1][curr] >= 0) return memo[prev + 1][curr];
  var taken = 0;
  if (prev < 0 || nums[curr] > nums[prev]) {
    taken = 1 + lengthofLIS(nums, curr, curr + 1, memo);
  }

  var nottaken = lengthofLIS(nums, prev, curr + 1, memo);
  memo[prev + 1][curr] = Math.max(taken, nottaken);
  return memo[prev + 1][curr];
}

console.log(lis([0, 1, 0, 3, 2, 3]));

// dp-tabulation solution with time complexity n^2 and space complexity n

const LIS_DP = (nums) => {
  len = nums.length;
  let LIS = new Array(len).fill(1);
  let max = 0;

  for (let i = 1; i < len; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i] && LIS[j] + 1 > LIS[i]) {
        LIS[i] = LIS[j] + 1;
      }
    }
  }
  for (let i = 0; i < len; i++) {
    if (max < LIS[i]) max = LIS[i];
  }
  return max;
};

console.log(LIS_DP([0, 1, 0, 3, 2, 3]));

// solution with time complexity O(n log n) and space complexity o(n)
//https://www.geeksforgeeks.org/longest-monotonically-increasing-subsequence-size-n-log-n/

const lis_3 = (nums) => {
  let arr_len = nums.length;
  let tailTable = new Array(arr_len);
  tailTable[0] = nums[0];
  let len = 1;

  for (let i = 1; i < arr_len; i++) {
    if (nums[i] < tailTable[0]) {
      tailTable[0] = nums[i];
      // if new element is smaller than end elements of all
      //active list then add a new active list of len 1
    } else if (nums[i] > tailTable[len - 1]) {
      // if new element is greater than end elements of longest active list
      //then exten the acitve list by adding the element
      tailTable[len++] = nums[i];
    } else {
      //new element lies in between we will find a list with
      // largest end element that is smaller than A[i].
      // Clone and extend this list by A[i]. We will discard all
      // other lists of same length as that of this modified list
      tailTable[ceilIndex(tailTable, -1, len - 1, nums[i])] = nums[i];
    }
  }
  return len;
};
function ceilIndex(tailTable, l, r, key) {
  while (r - l > 1) {
    let m = Math.floor(l + (r - l) / 2);
    if (tailTable[m] >= key) r = m;
    else l = m;
  }
  return r; // we are returning the ceil index for position where the key lies in increasing subsequence
}
console.log(lis_3([0, 1, 0, 3, 2, 3]));
console.log(lis_3([2, 5, 3, 7, 11, 8, 10, 13, 6]));
console.log(lis_3([18, 55, 66, 2, 3, 54]));

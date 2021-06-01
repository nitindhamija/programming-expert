function gcd(a, b) {
  if (b == 0) return a;
  return gcd(b, a % b);
}

// Returns LCM of array elements
function findlcm(arr, n) {
  // Initialize result
  let ans = arr[0];

  // ans contains LCM of arr[0], ..arr[i]
  // after i'th iteration,
  for (let i = 1; i < n; i++) {
    ans = (arr[i] * ans) / gcd(arr[i], ans);
  }

  return ans;
}
let arr = [2, 7, 3, 9, 4];
let n = arr.length;
console.log(findlcm(arr, n));

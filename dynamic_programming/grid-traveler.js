//using memoisation
function gridTravel(m, n, mem = {}) {
  const key = m + "," + n; //creating a key for putting in memoisation object
  if (m === 1 && n === 1) return 1; //ideal base case where grid is 1,1 and there is only one way to reach from source coordinates to destination coordinates
  if (m === 0 || n === 0) return 0; //base case where there's not row or column left to travel
  //const tempkey = key.split(",").reverse().join();
  //console.log(key + "  -> " + tempkey);
  if (key in mem) return mem[key]; // test if the key alreay exits in the memoisation object i.e if the case has already been traversed in one of the path so that we can avoid traversing the same case again and hence reducing time complexity of the solution

  mem[key] = gridTravel(m - 1, n, mem) + gridTravel(m, n - 1, mem); // save the results of smaller subproblems in to the memo object
  return mem[key]; // return the final result
}
//using tabulation
function gridTravelTabulation(m, n) {
  let table = new Array(m + 1).fill().map(() => Array(n + 1).fill(0));

  table[1][1] = 1;

  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      if (j + 1 <= n) table[i][j + 1] += table[i][j];
      if (i + 1 <= m) table[i + 1][j] += table[i][j];
    }
  }
  return table[m][n];
}

console.log(gridTravel(2, 3));
console.log(gridTravel(3, 3));
console.log(gridTravel(5, 5));
console.time("test dp");
console.log(gridTravel(18, 18)); //value is 2333606220, it will halt using normal recusion since the time complexity will be 2^(n+m) and but using the dynamic programming we have reduced the time complexity to (n*m) space complexity(n+m) is same in both cases
console.timeLog("test dp");
console.log("dp using tabulation");
console.log(gridTravelTabulation(18, 18));

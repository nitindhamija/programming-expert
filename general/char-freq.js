const charFreq = (s) => {
  if (s == null || s === undefined || s.length == 0) return "invalid input";

  let map = new Map();
  let o = "";
  s = s.trim().split("");
  s.forEach((ele) => {
    if (map.has(ele)) map.set(ele, map.get(ele) + 1);
    else map.set(ele, 1);
  });
  //print in insertion order
  //   for (let [key, value] of map) {
  //     console.log(`${key}: ${value}`);
  //     o = o + key + value;
  //   }
  //return o;

  //to sort the char by frequence decreasing order
  //https://leetcode.com/problems/sort-characters-by-frequency/submissions/ for more details about problem and sol
  //   let smap = new Map([...map].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])));
  //   console.log(smap);
  //   for (let [key, value] of smap) {
  //       for(let t=0;t<value;t++)
  //             o = o + key;
  //   }

  //to print in alphabetical order
  let smap = new Map([...map].sort((a, b) => b[1] - a[1]));
  console.log(smap);
  for (let [key, value] of smap) {
    console.log(`${key}: ${value}`);
    o = o + key + value;
  }
  return o;
};

console.log(charFreq("geeksforgeeks"));
console.log(charFreq(""));
console.log(charFreq(null));
console.log(charFreq(undefined));

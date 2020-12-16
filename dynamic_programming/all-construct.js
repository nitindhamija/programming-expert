/**brute force
 * time complexity n^m * m ->  due to computing rem_str as internally it would iterate through string and create new
 * space complexity m * m -> similar reason as above
 *
 * dynamic programming
 * time complexity n^m since we have to return all possible path in 2d array
 * space complexity m^2
 * [w,...p] very imp way to prepend, append element to array
 */

const allConstruct = (target, wordBank, mem = {}) => {
  if (target === "") return [[]];
  if (target in mem) return mem[target];
  let allPath = [];
  for (let w of wordBank) {
    if (target.indexOf(w) === 0) {
      let rem_str = target.slice(w.length);
      let possiblePath = allConstruct(rem_str, wordBank, mem);
      possiblePath = possiblePath.map((p) => [w, ...p]);
      allPath.push(...possiblePath);
    }
  }
  mem[target] = allPath;
  return allPath;
};

console.log(allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])); //true
console.log(
  allConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
); //false
console.log(
  allConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])
); //true
console.log(
  allConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "ee",
    "eee",
    "eee",
    "eeee",
    "eeeee",
    "eeeeee",
  ])
); //false

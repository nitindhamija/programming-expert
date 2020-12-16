/**brute force
 * time complexity n^m * m ->  due to computing rem_str as internally it would iterate through string and create new
 * space complexity m * m -> similar reason as above
 *
 * dynamic programming
 * time complexity n*m^2
 * space complexity m^2
 */

const canConstruct = (target, wordBank, mem = {}) => {
  if (target === "") return true;
  if (target in mem) return mem[target];
  for (let w of wordBank) {
    if (target.indexOf(w) === 0) {
      let rem_str = target.slice(w.length);
      if (canConstruct(rem_str, wordBank, mem) === true) {
        mem[target] = true;
        return true;
      }
    }
  }
  mem[target] = false;
  return false;
};

console.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])); //true
console.log(
  canConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
); //false
console.log(
  canConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])
); //true
console.log(
  canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeef", [
    "e",
    "ee",
    "eee",
    "eee",
    "eeee",
    "eeeee",
    "eeeeee",
  ])
); //false

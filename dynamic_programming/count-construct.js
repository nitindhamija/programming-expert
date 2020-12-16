/**brute force
 * time complexity n^m * m ->  due to computing rem_str as internally it would iterate through string and create new
 * space complexity m * m -> similar reason as above
 *
 * dynamic programming
 * time complexity n*m^2
 * space complexity m^2
 */

const countConstruct = (target, wordBank, mem = {}) => {
  if (target in mem) return mem[target];
  if (target === "") return 1;
  let count = 0;
  for (let w of wordBank) {
    if (target.indexOf(w) === 0) {
      let rem_str = target.slice(w.length);
      count += countConstruct(rem_str, wordBank, mem);
    }
  }
  mem[target] = count;
  return count;
};

console.log(countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])); //true
console.log(
  countConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
); //false
console.log(
  countConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])
); //true
console.log(
  countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeef", [
    "e",
    "ee",
    "eee",
    "eee",
    "eeee",
    "eeeee",
    "eeeeee",
  ])
); //false

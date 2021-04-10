const isValidSubsequence = (array, seq) => {
  let isValid = false;
  let i = 0;
  array.forEach((element) => {
    if (seq[i] == element) {
      isValid = true;
      i++;
    }
  });
  return isValid && i == seq.length;
};

console.log(isValidSubsequence([1, 2, 3, 4], [1, 3, 4]));
console.log(isValidSubsequence([1, 2, 3, 4], [2, 4]));

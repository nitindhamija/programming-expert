function solution(A, B, C) {
  // write your code in JavaScript (Node.js 8.9.4)
  let freq = [A, B, C];
  let chars = [];
  for (let i = 0; i < 3; i++) {
    chars[i] = {
      freq: freq[i],
      chr: "abc"[i],
    };
  }
  let s = "";
  while (true) {
    chars.sort((a, b) => b.freq - a.freq);
    let choice = chars[0];
    if (choice.freq === 0) break;
    if (choice.chr + choice.chr === s.slice(-2)) {
      choice = chars[1];
      if (choice.freq === 0) break;
    }
    choice.freq--;
    s += choice.chr;
  }
  return s;
}

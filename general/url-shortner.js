// const idToShortURL = (n) => {
//   const map = [
//     ..."abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
//   ];
//   let url = "";

//   //n = ~~n;
//   while (n > 0) {
//     n = parseInt(n);
//     url += map[n % 62];
//     n = n / 62;
//   }
//   console.log(`short url  -> ${url}`);
//   return url;
// };

// const shortURLToId = (url) => {
//   let id = 0;
//   const len = url.length;
//   for (let i = len - 1; i > 0; i--) {
//     if ("a" <= url.charAt(i) && url.charAt(i) <= "z")
//       id = id * 62 + url.charAt(i) - "a";
//     if ("A" <= url.charAt(i) && url.charAt(i) <= "Z")
//       id = id * 62 + url.charAt(i) - "A" + 26;
//     if ("0" <= url.charAt(i) && url.charAt(i) <= "9")
//       id = id * 62 + url.charAt(i) - "0" + 52;
//   }
//   console.log(`id is  -> ${id}`);
//   return id;
// };

// const shortUrl = idToShortURL(1234567891);
// shortURLToId(shortUrl);

const base62 = {
  charset: "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split(
    ""
  ),
  encode: (integer) => {
    if (integer === 0) {
      return 0;
    }
    let s = [];
    while (integer > 0) {
      s = [base62.charset[integer % 62], ...s];
      integer = Math.floor(integer / 62);
    }
    return s.join("");
  },
  decode: (chars) => {
    return chars
      .split("")
      .reverse()
      .reduce(
        (prev, curr, i) => prev + base62.charset.indexOf(curr) * 62 ** i,
        0
      );
  },
};

console.log(base62.encode(883314));
console.log(base62.decode("3HN0"));
console.log(base62.encode(1234567891));
console.log(base62.decode("1ly7vl"));

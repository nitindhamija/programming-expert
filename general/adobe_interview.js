const findkey = (obj, key) => {
  let arr = [];
  if (isPrimitive(obj)) return obj;

  for (let [k, val] of Object.entries(obj)) {
    if (k === key) arr.push(val);
    if (!isPrimitive(val)) arr = [...arr, ...findkey(val, key)];
  }
  return arr;
};

const isPrimitive = (val) => {
  return val !== Object(val);
};

// function findkey(obj, keyToFind) {
//   return Object.entries(obj).reduce(
//     (acc, [key, value]) =>
//       key === keyToFind
//         ? acc.concat(value)
//         : !isPrimitive(value)
//         ? acc.concat(findkey(value, keyToFind))
//         : acc,
//     []
//   );
// }

console.log(findkey({ a: 1, b: { a: { a: "red" } } }, "a"));
console.log(findkey({ a: 1, b: { a: { a: "red" } }, c: { d: 2 } }, "a"));
console.log(findkey({ a: 1, b: { a: { a: "red" } }, c: { d: 2 } }, "c"));

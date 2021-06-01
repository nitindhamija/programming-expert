const demo = (a) => {
  var sum = 0;
  var result;
  var max = -1000;
  a.forEach((e, i) => {
    sum = sum + e;
    if (e > max) max = e;
  });
  var len = a.length;
  var n = sum % len;
  if (n !== 0) result = n;
  else {
    while (max <= 0) {
      max++;
    }
    result = max;
  }
};

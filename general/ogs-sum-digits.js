const sum_digits = (A) => {
  // let temp="";
  // for(let i=A.length-1;i>=0;i--){
  //     temp+=A[i];
  // }
  // let v = parseInt(temp);
  // let result = 17*v;

  let sum = 0;
  let carryover = 0;
  for (let i = 0; i < A.length; i++) {
    let temp = 17 * A[i] + carryover;
    sum += temp % 10;
    carryover = Math.floor(temp / 10);
  }
  sum += carryover;
  return sum;
};

console.log(sum_digits([3, 5, 1]));

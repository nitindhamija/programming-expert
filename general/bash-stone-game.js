/**
 *here base case is 4 stones i.e if 4 stones are left then no matter one removes 1,2 or 3 stones one will always loose
  so if you are to make a move and stones left is 4 then you loose and same is true for other party, so now if are 
  to make first move then for below case we see that we can do n%4 to find out if you loose or win.
  stones   outcome
    1,2,3   win
    4       loose
    5       you remove 1 and the problem becomes 4 stones for your friend and you win
    6       you remove 2 and for the same reason you win
    7       win
    8       here no matter what you pick you loose since i.e let's say you remove 1 then your friend removes 3 stones 
            and left you with remaining 4 stones so you loose
            if you remove 2 stones he also removes 2 stones and again you are left with 4 stones and you loose
            if you remove 3 stones he removes 1 stone and you loose 
    9       win
    10      win
    11      win
    12      loose 
 */
const bashGame = (n) => {
  return n % 4 === 0 ? false : true;
};

// const bashGame = (n) => {
//   if (n <= 0) return false;
//   if (n <= 3) return true;

//   return !bashGame(n - 1) || !bashGame(n - 2) || !bashGame(n - 3);
// };

console.log(bashGame(3));
console.log(bashGame(4));
console.log(bashGame(5));
console.log(bashGame(6));
console.log(bashGame(7));
console.log(bashGame(8));
console.log(bashGame(9));
console.log(bashGame(12));
console.log(bashGame(16));
console.log(bashGame(20));
console.log(bashGame(23));
console.log(bashGame(24));

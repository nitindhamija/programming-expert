const majorityElement = (nums) => {
  const len = nums.length;
  var count = [];
  for (let i = 0; i < len; i++) {
    let temp = nums[i];
    if (isNaN(count[temp])) count[temp] = 0;
    count[temp]++;
  }
  var maxIndex;
  count.forEach((e, i) => {
    if (e !== undefined && e > len / 2) {
      maxIndex = i;
    }
  });
  if (maxIndex !== undefined) return maxIndex;
  else return -1;
};

// console.log(majorityElement([3, 2, 3]));
// console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
// console.log(majorityElement([3, 3, 4, 2, 4, 4, 2, 4, 4]));
// console.log(majorityElement([3, 3, 4, 2, 4, 4, 2, 4]));
// console.log(majorityElement([2147483647])); // this solution will not work for this case better solution would to use hashmap to store the occurance of each element
//even better approach given below with o(n) time complexity and o(1) space complexity would be Boyer-Moore Voting Algorithm

const majorityElementBoyerMoore = (nums) => {
  var majorityElementCandidate;
  var count = 0;
  nums.forEach((e, i) => {
    if (count === 0) majorityElementCandidate = e;

    count += majorityElementCandidate === e ? 1 : -1;
  });
  return majorityElementCandidate;
};

console.log(majorityElementBoyerMoore([3, 2, 3]));
console.log(majorityElementBoyerMoore([2, 2, 1, 1, 1, 2, 2]));
console.log(majorityElementBoyerMoore([3, 3, 4, 2, 4, 4, 2, 4, 4]));
console.log(majorityElementBoyerMoore([3, 3, 4, 2, 4, 4, 2, 4]));
console.log(majorityElementBoyerMoore([1]));
console.log(majorityElementBoyerMoore([1, 2]));
console.log(majorityElementBoyerMoore([3, 2, 3]));
console.log(majorityElementBoyerMoore([2147483647]));

//another variable of majority problem where to find all elements having occurance more than n/3

const majorityElement2 = (nums) => {
  var output = [];
  var i = 0;
  let countMap = new Map();
  nums.forEach((e) => {
    if (countMap.has(e)) {
      countMap.set(e, countMap.get(e) + 1);
    } else countMap.set(e, 1);
  });

  for (let [key, value] of countMap) {
    if (value > nums.length / 3) {
      output[i] = key;
      i++;
    }
  }
  return output;
};

console.log(majorityElement2([3, 2, 3]));
console.log(majorityElement2([2, 2, 1, 1, 1, 2, 2]));
console.log(majorityElement2([3, 3, 4, 2, 4, 4, 2, 4, 4]));
console.log(majorityElement2([3, 3, 4, 2, 4, 4, 2, 4]));
console.log(majorityElement2([1]));
console.log(majorityElement2([1, 2]));
console.log(majorityElement2([3, 2, 3]));
console.log(majorityElement2([2147483647]));

//boyer-moore algo to find element more than n/3 with o(n) time complexity and o(1) space complexity

const majorityElementBoyerMoore2 = (nums) => {
  var candidate1 = 0;
  var candidate2 = 0;

  var count1 = 0;
  var count2 = 0;

  nums.forEach((e) => {
    if (e === candidate1) count1++;
    else if (e === candidate2) count2++;
    else if (count1 === 0) {
      candidate1 = e;
      count1 = 1;
    } else if (count2 === 0) {
      candidate2 = e;
      count2 = 1;
    } else {
      count1--;
      count2--;
    }
  });
  count1 = 0;
  count2 = 0;
  nums.forEach((e) => {
    if (e === candidate1) count1++;
    else if (e === candidate2) count2++;
  });
  var output = [];
  var i = 0;
  if (count1 > nums.length / 3) {
    output[i] = candidate1;
    i++;
  }
  if (count2 > nums.length / 3) output[i] = candidate2;
  return output;
};

console.log("n/3");
console.log(majorityElementBoyerMoore2([3, 2, 3]));
console.log(majorityElementBoyerMoore2([2, 2, 1, 1, 1, 2, 2]));
console.log(majorityElementBoyerMoore2([3, 3, 4, 2, 4, 4, 2, 4, 4]));
console.log(majorityElementBoyerMoore2([3, 3, 4, 2, 4, 4, 2, 4]));
console.log(majorityElementBoyerMoore2([1]));
console.log(majorityElementBoyerMoore2([1, 2]));
console.log(majorityElementBoyerMoore2([2147483647]));

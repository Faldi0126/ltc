// TWO SUM
let nums = [2, 7, 11, 15];
let target = 17;
// Output [0, 1]

//NAIVE ANSWER IS USING NESTED LOOP

// GOOD ANSWER
// function twoSum(nums, target) {
//   let previousValue = {};

//   for (let i = 0; i < nums.length; i++) {
//     let currentNumber = nums[i];
//     let targetVal = target - currentNumber;
//     let index2 = previousValue[targetVal];

//     if (index2 != null) {
//       return [index2, i];
//     } else {
//       previousValue[currentNumber] = i;
//     }
//   }
// }

//REP ANSWER
function twoSum(nums, target) {
  let targetObj = {};

  for (let i = 0; i < nums.length; i++) {
    let val = target - nums[i];
    if (targetObj[val] !== undefined) {
      return [targetObj[val], i];
    }

    targetObj[nums[i]] = i;
  }
}

console.log(twoSum(nums, target));

/*
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

 

Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:

Input: nums = [0]
Output: [0]
*/

//brutal force
const nums = [0, 1, 0, 3, 12, 0, 200, 010];

function moveZeroes(arr) {
  let counter = 0;

  if (arr.length === 0 || !arr) {
    return 'input cannot be empty';
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      counter++;
      arr.splice(i, 1);
      i--;
    }
  }

  arr.sort((a, b) => a - b);

  for (let j = 0; j < counter; j++) {
    arr.push(0);
  }

  return arr;
}

//O(n)

/*
function moveZeroes(arr) {
  let counter = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      counter++;
      arr.splice(i, 1);
      i--;
    }
  }

  for (let i = 0; i < counter; i++) {
    arr.push(0);
  }

  return arr;
}
*/

console.log(moveZeroes(nums));

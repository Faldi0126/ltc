/*
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 

Example 1:

Input: nums = [1,2,3,1]
Output: true
Example 2:

Input: nums = [1,2,3,4]
Output: false
Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
 */

//FAILED THE TEST CASE
// function containsDuplicate(arr) {
//   let sorted = nums.sort(); // simple, sort dulu, nanti bandingin kalo i + 1 sama kaya i pasti dia itu ada duplikat

//   for (let i = 0; i < sorted.length; i++) {
//     if (sorted[i] === sorted[i + 1]) {
//       return true;
//     }

//     return false;
//   }
// }

let nums = [1, 2, 3, 4, 5, 9, 1];

function containsDuplicate(arr) {
  let temp = {}; // Karena array cuma satu, dan result cuma 2 , obj bakal diisi sama {1: true, 2: true dst}

  for (let i = 0; i < arr.length; i++) {
    if (temp[arr[i]]) {
      //Jika di iterasi berikutnya ketemu yang udh true berarti ada duplikat
      // console.log(temp);

      return true;
    } else {
      temp[arr[i]] = true; //Jika engga, tandain dulu kalo ini udh ada
    }
  }

  return false;
}

console.log(containsDuplicate(nums));

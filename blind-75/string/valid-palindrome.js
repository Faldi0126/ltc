/*
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

 

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.

*/

let s = 'race a car';
function isPalindrome(str) {
  let newStr = '';
  let alphaNum = 'abcdefghijklmnopqrstuvwxyz1234567890';

  if (str === ' ') {
    return true;
  }

  if (!str) {
    return 'input is invalid';
  }

  for (let i = 0; i < str.length; i++) {
    if (alphaNum.indexOf(str[i].toLowerCase()) !== -1) {
      newStr += str[i].toLowerCase();
    }
  }

  if (newStr === newStr.split('').reverse().join('')) {
    return true;
  }

  return false;
}

// function isPalindrome(str) {
//   let newStr = '';
//   let alphaNum = 'abcdefghijklmnopqrstuvwxyz0123456789';

//   if (str === ' ') {
//     return true;
//   }

//   if (!str) {
//     return 'No valid input';
//   }

//   for (let i = 0; i < str.length; i++) {
//     if (alphaNum.indexOf(str[i].toLowerCase()) !== -1) {
//       newStr += str[i].toLowerCase();
//     }
//   }

//   if (newStr === newStr.split('').reverse().join('')) {
//     return true;
//   }

//   return false;
// }

console.log(isPalindrome(s));

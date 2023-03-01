/*
Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

 

Example 1:

Input: s = "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"
Example 2:

Input: s = "God Ding"
Output: "doG gniD"
 
*/
let s = 'God Ding';

function reverseWords(str) {
  let tempArr = [];
  let arr = str.split(' ');

  for (let i = 0; i < arr.length; i++) {
    tempArr.push(arr[i].split('').reverse().join(''));
  }

  return tempArr.join(' ');
}

console.log(reverseWords(s));

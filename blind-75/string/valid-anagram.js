/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
*/

//sort and compare

const s = 'anagram';
const t = 'nagaram';

function isAnagram(str1, str2) {
  if (str1.split('').sort().join('') === str2.split('').sort().join('')) {
    return true;
  }

  return false;
}

console.log(isAnagram(s, t));

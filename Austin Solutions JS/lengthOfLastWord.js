// https://leetcode.com/problems/length-of-last-word/
// Given a string s consisting of some words separated by some
//  number of spaces, return the length of the last word in the string.

// A word is a maximal substring consisting of non-space characters only.

// Constraints:
// 1 <= s.length <= 104
// s consists of only English letters and spaces ' '.
// There will be at least one word in s.

// /**
//  * @param {string} s
//  * @return {number}
//  */
var lengthOfLastWord = function (s) {
  let words = s.split(" ").filter((element) => !!element);
  const lastWord = words[words.length - 1];
  return lastWord.length;
};

// Input: s = "   fly me   to   the moon  "
// Output: 4
// Explanation: The last word is "moon" with length 4.

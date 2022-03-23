/* Letter Combinations of a Phone Number - Medium
Given a string containing digits from 2-9 inclusive, return all possible letter combinations
that the number could represent. Return the answer in any order.

A mapping of digit to letters (just like on the telephone buttons) is given below.
Note: that 1 does not map to any letters.
1- ""       2-"a,b,c" 3-"d,e,f"
4-"g,h,i"   5-"j,k,l" 6-"m,n,o"
7-"p,q,r,s" 8-"t,u,v" 9-"w,x,y,z"

Example 1:
Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

Example 2:
Input: digits = ""
Output: []

Example 3:
Input: digits = "2"
Output: ["a","b","c"]
 
Constraints:
0 <= digits.length <= 4
digits[i] is a digit in the range ['2', '9']
*/

/**
 * @param {string} digits
 * @return {string[]}
 */

var letterCombinations = function (digits) {
  if (digits === "") return [];
  let res = [];
  let nums = [...digits];
  const lettersObj = {
    0: 0,
    1: 1,
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };
  if (digits.length === 1) return lettersObj[digits];

  //console.log({ nums });
  for (let i = 0; i < nums.length; i++) {
    nums[i] = lettersObj[nums[i]];
  }
  let stack = nums[0];
  for (let i = 1; i < nums.length; i++) {
    //console.log({ stack });
    //console.log("i:", nums[i]);
    for (let j = 0; j < nums[i].length; j++) {
      //console.log(nums[i], nums[i][j]);
      stack.forEach((array, index) => {
        res.push([array[index], nums[i][j]]);
      });
      //console.log("j:", nums[i][j]);
      //console.log(res);
    }
    //if single array return stack
  }
  return res;
};
/*

*/
console.log(letterCombinations("375"));

//0 digits = 0
// switch(number){
//         case "2": return ['a','b','c'];
//         case "3": return ['d','e','f'];
//         case "4": return ['g','h','i'];
//         case "5": return ['j','k','l'];
//         case "6": return ['m','n','o'];
//         case "7": return ['p','q','r','s'];
//         case "8": return ['t','u','v'];
//         case "9": return ['w','x','y','z'];
// const digitsMap = {
//   2: ["a", "b", "c"],
//   3: ["d", "e", "f"],
//   4: ["g", "h", "i"],
//   5: ["j", "k", "l"],
//   6: ["m", "n", "o"],
//   7: ["p", "q", "r", "s"],
//   8: ["t", "u", "v"],
//   9: ["w", "x", "y", "z"],
// };

//console.log(str[0]);
// const i = digitsMap.get(str[0]);
// console.log(digitsMap);?? why didnt this work like i thought

// const letterCombinations = digits => {
//   if (digits === '') return []

//   const lettersObj = {
//       "2": ["a", "b", "c"],
//       "3": ["d", "e", "f"],
//       "4": ["g", "h", "i"],
//       "5": ["j", "k", "l"],
//       "6": ["m", "n", "o"],
//       "7": ["p", "q", "r", "s"],
//       "8": ["t", "u", "v"],
//       "9": ["w", "x", "y", "z"],
//   }
// // const result = []
// const digitsArray = [...digits]
// // const lettersArray = letters.map(digit => lettersObj[digit])
// // let loopMax = lettersArray.reduce((prev, current) => prev.lengths * current.lengths)
// for (let digit of digitsArray) {
//     for (let letter of lettersObj[digit]) {
//         console.log(letter)
//     }
// }
// //

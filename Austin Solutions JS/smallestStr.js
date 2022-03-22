/*
1663. Smallest String With A Given Numeric Value - Medium - 03/22/2022 13:07	Accepted	477 ms	63.9 MB	javascript

The numeric value of a lowercase character is defined as its position (1-indexed) in the alphabet,
 so the numeric value of a is 1,
 the numeric value of b is 2, the numeric value of c is 3, and so on.
The numeric value of a string consisting of lowercase characters is defined as the sum of its characters
' numeric values. For example, the numeric value of the string "abe" is equal to 1 + 2 + 5 = 8.
You are given two integers n and k. Return the lexicographically smallest string with length equal
 to n and numeric value equal to k.
Note that a string x is lexicographically smaller than string y if x comes before y in dictionary order,
 that is, either x is a prefix of y, or if i is the first position such that x[i] != y[i], then x[i] comes before y[i] in alphabetic order.

 
Example 1:
Input: n = 3, k = 27
Output: "aay"
Explanation: The numeric value of the string is 1 + 1 + 25 = 27, 
and it is the smallest string with such a value and length equal to 3.

Example 2:
Input: n = 5, k = 73
Output: "aaszz"
 
Constraints:
1 <= n <= 105
n <= k <= 26 * n
*/

/**
 * @param {number} n//number of letter
 * @param {number} k//total value of letter
 * @return {string}
 */
var getSmallestString = function (n, k) {
  const numsToLets = {};
  for (let i = 1; i < 27; i++) {
    numsToLets[i] = String.fromCharCode(i + 96);
  }
  let arr1 = new Array(n);
  let pool = k - (n - 1);
  for (let i = 0; i < arr1.length; i++, pool++)
    if (pool > 25) {
      arr1[i] = "z";
      pool -= 26;
    } else if (pool === 1) {
      arr1[i] = "a";
      pool -= 1;
    } else {
      arr1[i] = numsToLets[pool];
      pool -= pool;
    }
  return arr1.sort().join("");
};

const debug = () => {
  console.log(getSmallestString(3, 27)); //"aay"
  console.log(getSmallestString(5, 73)); //"aaszz"
};
debug();

//pseudo
//create array with arg for index as n
//(array.length-1)-actual(27)
//String.fromCharCode(65, 66, 67);   // returns "ABC" 1+95=96-a
//if max is > 25 push a z and minus from pool
//case for in between use numtolet{}
//if max is === 1 add a and minus
//5*26 =130
//pushed values in an array
//sort
//join and stringify
//returning a string
//

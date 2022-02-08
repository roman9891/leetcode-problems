/*Given an integer num, repeatedly add all its digits until 
the result has only one digit, and return it.

 Example 1:
Input: num = 38
Output: 2
Explanation: The process is
38 --> 3 + 8 --> 11
11 --> 1 + 1 --> 2 
Since 2 has only one digit, return it.

Example 2:
Input: num = 0
Output: 0
 
Constraints:
0 <= num <= 231 - 1
*/

/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  const strDigits = num.toString();
  let arrDigits = [...strDigits];
  let total = 0;

  for (let i = 0; i < arrDigits.length; i++) {
    let digit = parseInt(arrDigits[i]);

    total += digit;
    if (i === arrDigits.length - 1) {
      const result = [...total.toString()];

      if (result.length === 1) {
        return result[0];
      } else {
        arrDigits = result;
        i = -1;
        total = 0;
      }
    }
  }
};

//console.log("i:", i, digit);
//console.log(arrDigits[i]);
//console.log("new total:", total);
// console.log("end of array", result);
// console.log("else");
//spread in array
//for(let i = 0; i < array.length; i++)
//conditional array.length === 1 return array[0]
//add arrays
//while()
console.log(addDigits(54634898)); //47 4,7 11 1,1 2

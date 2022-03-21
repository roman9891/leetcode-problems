/*
217. Contains Duplicate-Easy

Given an integer array nums, 
return true if any value appears at least twice in the array, 
and return false if every element is distinct.

Example 1:
Input: nums = [1,2,3,1]
Output: true

Example 2:
Input: nums = [1,2,3,4]
Output: false

Example 3:
Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
 
Constraints:
1 <= nums.length <= 105
-109 <= nums[i] <= 109
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */

//1st attempt
//var containsDuplicate = function (nums) {
//   for(let i = 0; i <nums.length;i++)

//     for (let j = 0; j < nums.length; j--) {
//       if (curNum === nums[j] && !(i == j)) {
//         console.log(`i:`, i, `j:`, j);
//         return true;
//       } else continue;
//     }

//   }
//   return false;
// };

//console.log(containsDuplicate([1, 2, 3, 1])); //true
// console.log(containsDuplicate([1, 2, 3, 4])); //true
// console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); //true
console.log(containsDuplicate([1, 2, 3, 4]));
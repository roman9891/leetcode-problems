/*
217. Contains Duplicate-Easy-03/21/2022 14:43	Accepted	1530 ms	47.5 MB	javascript

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
//Accepted Solution
const containsDuplicate = (nums) => {
  if (nums.length === 1) return false;
  else {
    //console.log(nums);
    for (let i = 0; i < nums.length; i++) {
      //console.log("i:", nums[i]);
      for (let j = i + 1; j < nums.length; j++) {
        //console.log("j:", nums[j]);
        if (nums[i] === nums[j]) return true;
      }
    }
  }
  return false;
};

//Attempt #2
// var containsDuplicate = (nums) => {
//   if (!(nums.length > 2)) {
//     for (let i = nums.length - 1; i >= 0; i--) {
//       console.log("i:", i, "nums[i]:", nums[i]);
//       nums.pop();
//       for (let j = nums.length - 2; j >= 0; j--) {
//         console.log("j:", j, "nums[j]:", nums[j]);
//         if (nums[i] === nums[j]) return true;
//       }
//     }
//   } else return false;
// };

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
const debug = () => {
  console.log(containsDuplicate([1, 2, 3, 6])); //true
  console.log(containsDuplicate([1, 2, 3, 4])); //true
  console.log(containsDuplicate([1, 3, 3, 3, 3, 4, 3, 2, 4, 2])); //true
  console.log(containsDuplicate([1, 2, 3, 4])); //false
};
debug();

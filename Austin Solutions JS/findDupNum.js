/*
287. Find the Duplicate Number - Medium - 03/29/2022 10:48	Accepted	202 ms	61.6 MB	javascript
  Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.
  There is only one repeated number in nums, return this repeated number.
Return:
  You must solve the problem without modifying the array nums and uses only constant extra space.

Example 1:
  Input: nums = [1,3,4,2,2]
  Output: 2
Example 2:
  Input: nums = [3,1,3,4,2]
  Output: 3
Constraints:
  1 <= n <= 105
  nums.length == n + 1
  1 <= nums[i] <= n
All the integers in nums appear only once except for precisely one integer which appears two or more times.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  const objTracker = {}; //use an object tracker to set present values to one
  for (const num of nums) {
    //when loop loops over dup return that value
    if (!objTracker[num]) {
      objTracker[num] = 1;
      console.log({ objTracker });
    } else if ((objTracker[num] = 1)) {
      return num;
    }
  }
};
console.log(findDuplicate([1, 3, 4, 2, 2]));
console.log(findDuplicate([3, 1, 3, 4, 2]));

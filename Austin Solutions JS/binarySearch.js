/*
Binary Search
  Given an array of integers nums which is sorted in ascending order,
    and an integer target, write a function to search target in nums.
  Return:
   If target exists, then return its index. Otherwise, return -1.
Constraint:
  You must write an algorithm with O(log n) runtime complexity.

Example 1:
   Input: nums = [-1,0,3,5,9,12], target = 9
   Output: 4
  Explanation: 9 exists in nums and its index is 4
Example 2:
    Input: nums = [-1,0,3,5,9,12], target = 2
    Output: -1
  Explanation: 2 does not exist in nums so return -1
 
Constraints:
  1 <= nums.length <= 104
  -104 < nums[i], target < 104
  All the integers in nums are unique.
  nums is sorted in ascending order.
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {};
search([-1, 0, 3, 5, 9, 12], 9);
search([-1, 0, 3, 5, 9, 12], 2);

/*
Method 1 - fail -not in O log n
  //variable equal to target present
  //intitalize counter at 0
  //while loop
  //parameter is loop until counter equals length of nums minus 1 or line 32 variable is true
  //if nums at index of counter equals target set line 32 variable to true
  //else increment counter to check the next position in the next loop iteration
  //end of while loop
  //return statement
  //if line 32 variable true return counter to indicate target position
  //else if variable is false return -1 to indicate target not present
*/

/* Median Of Two Sorted Arrays - Hard
Given two sorted arrays nums1 and nums2 of size m and n respectively, 
return the median of the two sorted arrays.
The overall run time complexity should be O(log (m+n)).

Example 1:
Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.

Example 2:
Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

Constraints:
nums1.length == m
nums2.length == n
0 <= m <= 1000
0 <= n <= 1000
1 <= m + n <= 2000
-106 <= nums1[i], nums2[i] <= 106
*/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const toSort = nums1.concat(nums2).sort((a, b) => a - b);
  const isOdd = toSort.length % 2 === 1;
  const halfLength = toSort.length / 2;

  return isOdd
    ? toSort[Math.floor(halfLength)]
    : (toSort[halfLength - 1] + toSort[halfLength]) / 2;
};

//test - nums
//console.log(findMedianSortedArrays([1, 3], [2])); //2
//console.log(findMedianSortedArrays([1, 2], [3, 4])); //2.5
// console.log(findMedianSortedArrays([1, 3, 6, 7], [2, 4, 6]); //[1,2,3,4,6,6,7] = 4
//console.log(findMedianSortedArrays([6, 13, 67, 97], [20, 40, 60, 98]));

//isOdd
//const test1 = [1, 2, 3, 4, 5, 6, 7];
//console.log(Math.floor(test1.length / 2)); //Math.floor(3.5) = 3
//console.log(test1[Math.floor(test1.length / 2)]); //4
//console.log(test1.length % 2);
//console.log(Math.floor(7 / 2)); //3
//isEven test
// const test2 = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(test2.length / 2); //4
// console.log(test2[test2.length / 2]); //5
// console.log(test2[test2.length / 2 - 1]); //4
//console.log((test2[test2.length / 2 - 1] + test2[test2.length / 2]) / 2)); //9/2 =4.5

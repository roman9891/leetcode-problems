/*
74. Search a 2D Matrix - Medium
Write an efficient algorithm that searches for a value target in an m x n integer matrix matrix.
 This matrix has the following properties:
  Integers in each row are sorted from left to right.
  The first integer of each row is greater than the last integer of the previous row.
Example 1:
  Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
  Output: true

Constraints:
  m == matrix.length
  n == matrix[i].length
  1 <= m, n <= 100
  -104 <= matrix[i][j], target <= 104
POA:
  Goal:
    Find the target, if present return true else return false
  Speed methods:
    Arrays are sorted with the first element of each array being greater than the previous arrays last element
Psuedo:
  to find target the fastest start in the middle
  compare target to last element of the middle array
  to determine if in target range
    pointer for findin the right array
      start at end of middle array in middle nested array
    find two conditions
      greater than
        if target is greater than pointer set
      less than
  after determing the array target is present in using the last element
  starting in the middle of the present array 
  eliminate the remaining possibilities 
 Return
  while the middle algorith acts as a pointer set a tru false value that if pointer ever looks at target set to true and end search
  when the middle algorithm finds the range target should be present in and does not find target end search
Notes:
  target
*/

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {};

//corner cases are if target doesnt exist
const cornerCases = () => {
  searchMatrix(
    [
      [1, 2, 3],
      [5, 6, 7],
      [9, 10, 11],
    ],
    8
  ); //false
  searchMatrix(
    [
      [1, 2, 3],
      [4, 5, 7],
      [9, 10, 11],
    ],
    6
  ); //flase
};
cornerCases();

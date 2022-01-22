// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// pseudocode:
// use two pointers
// one pointer points at a value
// other pointer goes through rest of array iteratively
// each iteration check if sum of pointers equals target
// return pointers
//
// optimization:
// sort array in ascending order
// omit values greater than or equal to target
// disregard since negative values are permissable

const twoSum = (arr, target) => {
    for (let p1 = 0; p1 < arr.length; p1++) {
        for (let p2 = p1+1; p2 < arr.length; p2++) {
            if (arr[p1] + arr[p2] === target) return [p1,p2]
        }
    }
}

// O(n^2)

// Faster solution O(n): 

// var twoSum = function(nums, target) {
//     let m = new Map();
//     for (let [ind, n] of nums.entries()){
//         if (m.has(target-n)) return [ind, m.get(target-n)]
//         m.set(n, ind);
//     }
// };

console.log(twoSum([2,7,11,15], 9)) // [0,1]
console.log(twoSum([3,2,4], 6)) // [1,2]
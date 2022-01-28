//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

//You may assume that each input would have exactly one solution, and you may not use the same element twice.

//You can return the answer in any order.
const twoSum = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] + arr[j] === target && i !== j) {
        const targetArr = [];
        targetArr.push(i, j);
        return targetArr;
      }
    }
  }
};

console.log(twoSum([15, 2, 11, 7], 9));

var letterCombinations = function (digits) {
  if (digits === "") return [];
  let nums = [...digits];
  const lettersObj = {
    0: 0,
    1: 1,
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };
  if (digits.length === 1) return lettersObj[digits];

  //console.log({ nums });
  for (let i = 0; i < nums.length; i++) {
    nums[i] = lettersObj[nums[i]];
  }
  let res = nums[0];
  for (let i = 1; i < nums.length; i++) {
    console.log({ res });
    //console.log("i:", nums[i]);
    for (let j = 0; j < nums[i].length; j++) {
      //console.log(nums[i], nums[i][j]);
      res = res.map((element) => {
        console.log(element, nums[i][j]);
        return [element + nums[i][j]];
        //   ;
        // return res.push([letter + nums[i][j]])//[...element, nums[i][j]]
      });
      //console.log("j:", nums[i][j]);
      //console.log(res);
    }
    //if single array return stack
  }
  return res;
};
/*

*/
console.log(letterCombinations("37"));

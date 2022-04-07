/*
1046. Last Stone Weight - Easy
  Parameter:
    You are given an array of integers stones 
      where stones[i] is the weight of the ith stone.
Function:
  We are playing a game with the stones. 
    On each turn, we choose the heaviest two stones and smash them together.
  Suppose the heaviest two stones have weights x and y with x <= y. 
  The result of this smash is:
    If x == y, both stones are destroyed, and
    If x != y, the stone of weight x is destroyed, and the stone of weight y has new weight y - x.
Return:
    At the end of the game, there is at most one stone left.
    Return the smallest possible weight of the left stone. 
      If there are no stones left, return 0.
Example 1:
  Input: stones = [2,7,4,1,8,1]
  Output: 1
  Explanation: 
    We combine 7 and 8 to get 1 so the array converts to [2,4,1,1,1] then,
    we combine 2 and 4 to get 2 so the array converts to [2,1,1,1] then,
    we combine 2 and 1 to get 1 so the array converts to [1,1,1] then,
    we combine 1 and 1 to get 0 so the array converts to [1] 
      then that's the value of the last stone.
Example 2:
  Input: stones = [1]
  Output: 1
Constraints:
  1 <= stones.length <= 30
  1 <= stones[i] <= 1000
Psuedo:
Int an object called game
early outs:
  results will be zero
    if stones length is even and all stones weigh the same
  game cant be played
    if stones length is less than 2
play game
  sort the stones heaviest to lightest
  loop over array untill no challengers left
    set champ int as stones[0] after sort
    find challenger next heaviest stones
    subtract challenger from champion
    track remander in champion
    next round
Return champion
*/

/**
 * @param {number[]} stones
 * @return {number}
 */

var lastStoneWeight = function (stones) {
  if (stones.length === 1) {
    console.log("stones.length === 1");
    return stones[0];
  }
  //sort the stones heaviest to lightest
  const sortedStones = stones.sort((a, b) => b - a);
  console.log({ sortedStones });
  //set champ int as stones[0] after sort
  let champ = sortedStones[0];
  //loop over for challengers
  for (let i = 1; i < sortedStones.length; i++) {
    //find challenger next heaviest stones
    let challenger = sortedStones[i];
    console.log({ challenger });
    //subtract challenger from champion and keep remainder as champ
    if (challenger > champ) {
      champ = challenger - champ;
    } else {
      champ -= challenger;
    }
    console.log({ champ });
  }
  // Return champion
  console.log("return");
  return champ;
};
//first if stones is only 1 stone
//console.log(lastStoneWeight([1]), "[1]"); //return = 1 - PASSED
//second plays game
//console.log(lastStoneWeight([1, 2, 3, 4]), "[1,2,3,4]"); //return = 0 - PASSED
// Example 1 -[2,7,4,1,8,1] - expected output-1
console.log(lastStoneWeight([2, 7, 4, 1, 8, 1])); //return = 1 -

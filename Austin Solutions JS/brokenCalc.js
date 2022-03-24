/*
There is a broken calculator that has the integer startValue on its display initially. 
In one operation, you can:
multiply the number on display by 2, or
subtract 1 from the number on display.
Given two integers startValue and target, 
return the minimum number of operations needed to display target on the calculator.

Example 1:
Input: startValue = 2, target = 3
Output: 2
Explanation: Use double operation and then decrement operation {2 -> 4 -> 3}.

Example 2:
Input: startValue = 5, target = 8
Output: 2
Explanation: Use decrement and then double {5 -> 4 -> 8}.

Example 3:
Input: startValue = 3, target = 10
Output: 3
Explanation: Use double, decrement and double {3 -> 6 -> 5 -> 10}.

Constraints:
1 <= x, y <= 109
*/
/**
@param {number} startValue
@param {number} target
@return {number}
*/

var brokenCalc = function (startValue, target) {
  const end = target;
  let start = startValue;
  let i = 0;
  do {
    let nextStep = start / end;
    console.log({ nextStep });
    if (start === 1) {
      start *= 2;
      i++;
      console.log({ start }, "*2");
    } else if (start > end) {
      start -= 1;
      i++;
      console.log({ start }, "-1");
    } else if (nextStep < 0.6 || start <= 2) {
      start *= 2;
      i++;
      console.log({ start }, "*2");
    } else if (nextStep >= 0.6 && start > 2) {
      start -= 1;
      i++;
      console.log({ start }, "-1");
    }
  } while (!(start === end));
  console.log({ i });
  return i;
};

/* 
Passed-
  brokenCalc(2,3)
  brokenCalc(1,2)
  brokenCalc(3,7)
  brokenCalc(3,10)
*/

/*
Failed -
 brokenCalc(1, 1000000000); 
*/

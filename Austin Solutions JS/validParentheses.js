/*
20. Valid Parentheses - Easy
  Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', 
Return:
  Determine if the input string is valid.
    An input string is valid if:
      Open brackets must be closed by the same type of brackets.
       Open brackets must be closed in the correct order.
Example 1:
  Input: s = "()"
  Output: true
Example 2:
  Input: s = "()[]{}"
  Output: true
Example 3:
  Input: s = "(]"
  Output: false
Constraints:
  1 <= s.length <= 104
  s consists of parentheses only '()[]{}'
Notes:
  rules for brackets:
   you can open a new bracket any time,
    but the next closing bracket needs to match the previous unclosed bracket

Psuedo:..validate string func
intitialize a variable called evaluating set to true
  first evaluate if s.length is even,
    if even continue 
      if odd set evaluating to false
initialize cache(an empty array) for caching the opening brackets 
object tracker
    tracks opening brackers-[keys]to closing brackets-[values]
initiliaze incement value
  while loop - while evaluating
    when increment greater than s.length - break
    if cache.length > s.length/2 - set evaluating false

    if index is a key push index to cache and continue
    else if index is a value and cache is empty - set evaluating to false
    else if index is a value and cache is not empty
      evaluate if last element of cache is the key to the value
        if yes pop cache and continue
      else set evaluating to false
    
    increment index
    when increment = s.length at end of loop 
      and cache is empty update evaluating to true

  return evaluating
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  console.log({ s });
  let condition = {
    evaluating: true,
    evaluation: true,
  };
  if (s.length % 2 === 1) {
    condition.evaluating = false;
    condition.evaluation = false;
  }
  const objTrk = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  let cache = [];
  let i = 0;
  console.log({ cache }, { i });
  while (condition.evaluating) {
    console.log("hello");
    evaluateStr = (cache, s, i) => {
      console.log({ i });
      console.log({ cache });
      return (i = s.length
        ? () => {
            condition.evaluating = false;
          }
        : objTrk.keys.includes(s[i])
        ? () => {
            cache.push(s[i]);
            i++;
            evaluateStr(cache, s, i);
          }
        : objTrk[cache[cache.length - 1]] === s[i]
        ? () => {
            cache.pop();
            i++;
            evaluateStr(cache, s, i);
          }
        : () => {
            condition.evaluating = false;
            condition.evaluation = false;
          });
    };
  }
  // if cache isnt empty or i doesnt equal length-1
  if (!cache === [] || !i === s.length - 1) {
    condition.evaluation = false;
  }
  return condition.evaluation;
};

isValid("(((()))"); //false
isValid("({}{})"); //true
isValid("()[]{}"); //true
isValid("("); //false

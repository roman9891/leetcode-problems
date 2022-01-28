//Given an integer x, return true if x is palindrome integer.

//An integer is a palindrome when it reads the same backward as forward.

var isPalindrome = function (x) {
  const string = x.toString();
  const reversed = reverseString(string);
  if (reversed === string) return true;
  else return false;
};

function reverseString(str) {
  let reversed = "";

  for (i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

const isPalindrome = (num) =>
  [...num.toString()].reverse().join("") === num.toString();

/*Given an array of strings words, return the words that can be typed using letters of the alphabet on only one row of American keyboard like the image below.

In the American keyboard:

the first row consists of the characters "qwertyuiop",
the second row consists of the characters "asdfghjkl", and
the third row consists of the characters "zxcvbnm".
*/
/*Example 1:
Input: words = ["Hello","Alaska","Dad","Peace"]
Output: ["Alaska","Dad"]

Example 2:
Input: words = ["omk"]
Output: []

Example 3:
Input: words = ["adsdf","sfd"]
Output: ["adsdf","sfd"]
 
Constraints:
1 <= words.length <= 20
1 <= words[i].length <= 100
words[i] consists of English letters (both lowercase and uppercase). 
*/

/**
 * @param {string[]} words
 * @return {string[]}
 */
//declare three rows of letters

var findWords = function (words) {
  const rows = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];
  const result = [];

  for (word of words) {
    const letters = [...word.toLowerCase()];
    for (row of rows) {
      if (letters.every(checkLetter)) result.push(word);
    }
  }
  return result;
};
const checkLetter = (letter) => row.includes(letter);

// let function () {}

console.log(findWords(["Hello", "Alaska", "Dad", "Peace"])); //["Alaska","Dad"]
console.log(findWords(["omk"])); //[]
console.log(findWords(["adsdf", "sfd"])); //["adsdf","sfd"]
//.lowercase-then current word and spread into array
//for each row
//if each letter is included push into results
//break
//console.log("inside loop", word);

//lowercase.includes()
//boolean conditional
//if pass push to return string
//return = []

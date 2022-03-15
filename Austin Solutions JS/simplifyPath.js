/* SimplifyPath -Medium-
Given a string path, which is an absolute path (starting with a slash '/') to a file or directory in a Unix-style file system, convert it to the simplified canonical path.

In a Unix-style file system, a period '.' refers to the current directory, a double period '..' refers to the directory up a level, and any multiple consecutive slashes (i.e. '//') are treated as a single slash '/'. For this problem, any other format of periods such as '...' are treated as file/directory names.

The canonical path should have the following format:

The path starts with a single slash '/'.
Any two directories are separated by a single slash '/'.
The path does not end with a trailing '/'.
The path only contains the directories on the path from the root directory to the target file or directory (i.e., no period '.' or double period '..')
Return the simplified canonical path.

Example 1:

Input: path = "/home/"
Output: "/home"
Explanation: Note that there is no trailing slash after the last directory name.
Example 2:

Input: path = "/../"
Output: "/"
Explanation: Going one level up from the root directory is a no-op, as the root level is the highest level you can go.
Example 3:

Input: path = "/home//foo/"
Output: "/home/foo"
Explanation: In the canonical path, multiple consecutive slashes are replaced by a single one.
 

Constraints:

1 <= path.length <= 3000
path consists of English letters, digits, period '.', slash '/' or '_'.
path is a valid absolute Unix path.
*/

/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  const regex = /\/+/g;
  let upPath = path.replace(/\.+/g, "").replace(regex, "/");

  if (upPath.endsWith("/") && upPath.length > 1) upPath = upPath.slice(0, -1);

  return upPath;
};

console.log(simplifyPath("/../"));
console.log(simplifyPath("/home//foo/"));

/*
Submitted
Fail case.q
Input:
"/a/./b/../../c/"
Output:
"/a/b/c"
Expected:
"/c"
Discussion based solution: stack based
*/

var simplifyPath = function (path) {
  // Split path by matching /./ or /
  const regex = /\/\.\/|\/+/;
  let pathArr = path.split(regex);
  /* 
    Eg: "/a/../../b/../c//.//".split(/\/\.\/|\/+/)
    Gives us  ['', 'a', '..', '..', 'b', '..', 'c', '.', '']
    */

  //Stack to keep track of path
  let stack = [];
  for (let i = 0; i < pathArr.length; i++) {
    if (pathArr[i]) {
      //i.e out pathArr !== ""
      /* 
            ".." means that we have to go back so we do pop
            */
      if (pathArr[i] === "..") stack.pop();
      /* An empty . in the end is not a valid path so if we do not encounter "."
            that means that our path is valid so we push it to stack
            */ else if (pathArr[i] !== ".") stack.push(pathArr[i]);
    }
  }
  // In the end we return our path that we have in stack
  return "/" + stack.join("/");
};

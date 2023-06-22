/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  let answer = false;
  var strl = str.toLowerCase();
  let temp = "";

  for(let i=strl.length-1; i>=0; i--) {
    temp += strl[i];
  }

  let newtemp = temp.replace(/\s/g, "");
  newtemp = newtemp.replace(/[^\w\s]|_/g, "");
  let newstrl = strl.replace(/\s/g, "");
  newstrl = newstrl.replace(/[^\w\s]|_/g, "");

  if(newtemp === newstrl) {
    answer = true;
  }
  else {
    answer = false;
  }
  return answer;
}

module.exports = isPalindrome;

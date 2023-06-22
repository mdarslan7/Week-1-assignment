/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  let answer = true;
  var strl = str.toLowerCase();
  let temp = "";

  for(let i=strl.length-1; i>=0; i--) {
    temp += strl[i];
  }

  if(temp === strl) {
    answer = true;
  }
  else {
    answer = false;
  }
  return answer;
}

module.exports = isPalindrome;

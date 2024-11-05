/*
Given an integer x, return true if x is a
palindrome
, and false otherwise.

Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.

Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

 

Constraints:

    -231 <= x <= 231 - 1

 
Follow up: Could you solve it without converting the integer to a string?
 */

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let reversed = x.toString().split('').reverse().join('');
    return x.toString()===reversed
    /*console.log(x);
    console.log('reversed');
    console.log(reversed)
    console.log('-------')*/
};

var isPalindromeNoStringSolution = function(x) {
  if(x<0) return false;
  let reverse = 0;
  for (let i=x; i>=1; i=Math.floor(i/10) ){
    reverse = reverse*10+i%10
    }
  /*
  vuelta 1
  i ->3121
  reverse -> 1 = 0 + 1
  vuelta 2
  i -> 312
  reverse -> 12 = 1*10 + 2
  vuelta 3
  i -> 31
  reverse -> 121 = 12*10+1
  vuelta 4 
  i ->3
  reverse -> 1213 = 121*10+3
  */
  return reverse===x
};

console.log(isPalindromeNoStringSolution(31213))
console.log(isPalindromeNoStringSolution(-31213))
console.log(isPalindromeNoStringSolution(10))
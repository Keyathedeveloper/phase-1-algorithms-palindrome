function isPalindrome(word) {
  // Write your algorithm here
  //Convert to lowercase
  word = word.toLowerCase();

  //Setup pointers
  let start = 0;
  let end = word.length - 1;

  //iterate until pointers meet or cross
  while (start < end) {
    //if not equal, it isn't a palindrome
    if (word[start] != word[end]) {
      return false;
    }
//move pointers
start++;
end--;
}
//if loop completes, it is  palindrome
return true;

}

/*
Function isPalindrome:
  Input: word (string)
  Output: true if word is a palindrome, false otherwise

  1. Convert the word to lowercase.
  2. Set up pointers at the beginning and end of the word.
  3. While the pointers haven't met or crossed:
     a. If the characters at the pointers are different, return false.
     b. Move the first pointer forward.
     c. Move the second pointer backward.
  4. If the loop completes without returning false, return true.


*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
console.log("Expecting: true");
console.log("=>", isPalindrome("wow"));

console.log("Expecting: false");
console.log("=>", isPalindrome("stomach"))

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;

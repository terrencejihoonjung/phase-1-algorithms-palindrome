function isPalindrome(word) {
  const reverseWord = word.split("").reverse().join("");
  return word === reverseWord;
}

/* 
  PSEUDOCODE:
  Split word into an array
  Reverse array 
  Join array elements into a string 
  Compare with the word argument
*/

/*
  Add written explanation of your solution here
  The algorithm reverses the word and compares that reversed word with the original word.
  It returns true if they match. Otherwise, false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("madam"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("modam"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;

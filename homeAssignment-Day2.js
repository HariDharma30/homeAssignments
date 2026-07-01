function reverseString(str) 
{
  let chars = str.split("");
  let reversed = "";

  for (let i = chars.length - 1; i >= 0; i--) 
  {
   reversed = reversed + chars[i];
  }

  return reversed;
}

function isPalindrome(str) 
{
  let reversedStr = reverseString(str);

  if (str === reversedStr) 
  {
    return true;
  } 
  else 
  {
    return false;
  }
}

let word1 = "madam";
let word2 = "hello";
let word3 = "racecar";
let word4 = "level";

console.log(word1 + " -> Reversed: " + reverseString(word1) + " -> Palindrome: " + isPalindrome(word1));
console.log(word2 + " -> Reversed: " + reverseString(word2) + " -> Palindrome: " + isPalindrome(word2));
console.log(word3 + " -> Reversed: " + reverseString(word3) + " -> Palindrome: " + isPalindrome(word3));
console.log(word4 + " -> Reversed: " + reverseString(word4) + " -> Palindrome: " + isPalindrome(word4));

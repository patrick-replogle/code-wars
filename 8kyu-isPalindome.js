// Palindrome strings
// A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. 
// This includes capital letters, punctuation, and word dividers.

//Implement a function that checks if something is a palindrome.

//my solution
function isPalindrome(line) {
  let string = line.toString().split('').reverse().join('');
  if(typeof(line) === 'number') {
    string = Number(string)
    }
  if(string === line) {
    return true
  }
  return false
}

// second solution 
function isPalindrome(line) {
  if (String(line) === line.toString().split('').reverse().join('')) {
    return true
  }
  return false
}

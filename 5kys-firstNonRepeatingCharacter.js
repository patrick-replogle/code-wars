// Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is 
// not repeated anywhere in the string.

// For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the 
// string, and occurs first in the string.

// As an added challenge, upper- and lowercase letters are considered the same character, but the function should return 
// the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

// If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests.

// my solution
function firstNonRepeatingLetter(s) {
  let map = {}
  let str = s.toLowerCase()
  
  for(let i = 0; i < str.length; i++) {
    let char = str[i]
      map[char] ? map[char] += 1 : map[char] = 1
  }
  
  for(let j = 0; j < s.length; j++) {
    char = s[j].toLowerCase()
    if(map.hasOwnProperty(char) && map[char] === 1) {
      return s[j]
    } 
  }
  return ''
}

// solution 2
function firstNonRepeatingLetter(s) {
  let str = s.toLowerCase();
  for(let i = 0; i < str.length; i++) {
    if(str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
      return s[i];
    }
  }
  return "";
}

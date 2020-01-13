/*
The word i18n is a common abbreviation of internationalization in the developer community, used instead of typing the whole word and trying to spell it correctly. Similarly, a11y is an abbreviation of accessibility.

Write a function that takes a string and turns any and all "words" (see below) within that string of length 4 or greater into an abbreviation, following these rules:

A "word" is a sequence of alphabetical characters. By this definition, any other character like a space or hyphen (eg. "elephant-ride") will split up a series of letters into two words (eg. "elephant" and "ride").
The abbreviated version of the word should have the first letter, then the number of removed characters, then the last letter (eg. "elephant ride" => "e6t r2e").
    
*/

//best solution's

function abbreviate(string) {
  return string.replace(/\w{4,}/g, function(word) {
    return word[0] + (word.length - 2) + word.slice(-1);
  });
}

function abbreviate(string) {
  return string.replace(/\w{4,}/g, function(w) { return w[0] + (w.length - 2) + w[w.length - 1] });
}

//my solution
function abbreviate(string) {
  let arr = string.split(' ')
  result = []
  for(let i = 0; i < arr.length; i++) {
    if(arr[i].length > 3 && arr[i].includes("-")) {
      result.push(arr[i].split("-").map(y => String(y[0] + y.slice(1,y.length-1).length + y[y.length-1])).join("-"))
    } else if(arr[i].includes(",")) {
       result.push(arr[i].split(",").splice(0,1).map(z => String(z[0] + z.slice(1,z.length-1).length + z[z.length - 1]).concat(",")))     
    } else if(arr[i].length > 3){
      result.push(arr[i][0] + (arr[i].length - 2) + arr[i].charAt(arr[i].length - 1))
      }  else {
      result.push(arr[i])
     }
  }
  return result.join(' ');
}

console.log(abbreviate("internationalization"))
console.log(abbreviate("accessibility"))
console.log(abbreviate("Accessibility"))
console.log(abbreviate("elephant-ride"))

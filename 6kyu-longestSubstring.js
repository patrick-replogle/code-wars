// We have to find the longest substring of identical characters in a very long string.


// solution #1
function findLongestSubstr(s) {
  let longest = 0;
  let currLen = 0 
  let endIdx;
  let currChar; 
  
  for(let i = 0; i < s.length; i++) {
    if(s[i] !== currChar) {
      if(currLen > longest && /[A-Za-z0-9]/.test(s[i-1])) {
        longest = currLen
        endIdx = i - 1 
      } 
      currLen = 1
      currChar = s[i]
    } else {
      currLen++
    }
  }
  return [''+ s.charCodeAt(endIdx), longest, [endIdx - longest + 1, endIdx]]
}

// solution 2
function findLongestSubstr(s) {
 let regex = /([A-Za-z0-9])\1+/g;
 let longest = 0;
 let char;
 let arr;
 let index;
  
 while((arr = regex.exec(s)) !== null) {
   if(arr[0].length > longest) {
     longest = arr[0].length;
     char = arr[0][0];
     index = arr.index
   }
 }
  return ['' + char.charCodeAt(0), longest, [index, index + longest - 1]]
}

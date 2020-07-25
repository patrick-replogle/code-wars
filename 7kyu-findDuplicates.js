// Given an array, find the duplicates in that array, and return a new array of those duplicates. The elements of the 
// returned array should appear in the order when they first appeared as duplicates.

// Note: numbers and their corresponding string representations should not be treated as duplicates (i.e., "1" != 1).

// my solution:

function duplicates(arr) {
  let result = []
  for(let i = 0; i < arr.length; i++) {
    if(arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i]) && 
       !result.includes(arr[i])) {
        result.push(arr[i])
    }
  }
  return result;
}

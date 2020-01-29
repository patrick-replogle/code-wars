// Write a function that when given a number >= 0, returns an Array of ascending length subarrays.

// pyramid(0) => [ ]
// pyramid(1) => [ [1] ]
// pyramid(2) => [ [1], [1, 1] ]
// pyramid(3) => [ [1], [1, 1], [1, 1, 1] ]
// Note: the subarrays should be filled with 1s

//my solution
function pyramid(n) {
  let result = []
  if(n < 1) {
    return []
  } else {
    for(let i = 0; i < n; i++){
      result.push(Array(i + 1).fill(1))
  
    }
  }
  return result;
}

//some best use solutions 

//#1 
function pyramid(n) {
  const res = [];
  for(let i = 0; i < n; i++){
    res.push([...Array(i+1)].fill(1))
  }
  return res;
}

//#2
function pyramid(n) {
  return Array(n).fill().map((e,i)=>Array(i+1).fill(1))
}

//#3
function pyramid(n) {
  var newArray = [];
  
  if(n === 0) {
    return [];
  } else if(n > 0) {
  
    for(let i = 0; i < n; i++) {
      newArray[i] = new Array();
      for(let j = 0; j <= i; j++) {
        newArray[i][j] = 1;
      }
    }
  }
  return newArray;
}

//#4
function pyramid(n) {
  result = []
  for(let i = 0; i < n; i++) {
    result.push(Array(i+1).fill(1))
  }
  return result
}

console.log(pyramid(0))
console.log(pyramid(1))
console.log(pyramid(2))
console.log(pyramid(3))

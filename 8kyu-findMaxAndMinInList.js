// Your task is to make two functions, max and min (maximum and minimum in PHP and Python) that take a(n) array/vector of integers 
// list as input and outputs, respectively, the largest and lowest number in that array/vector.

// my solution

const min = function(list){
    let min = list[0]
    for(let i = 0; i < list.length; i++) {
      if(typeof(list[i]) === 'number') {
        if(list[i] < min) min = list[i]
      }
    }
  return min
}

const max = function(list){
    let max = list[0]
    for(let i = 0; i < list.length; i++) {
      if(typeof(list[i]) === 'number') {
        if(list[i] > max) max = list[i]
      }
    }
  return max
 }

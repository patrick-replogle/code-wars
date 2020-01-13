// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. 

// NOTE: All numbers will be whole numbers greater than 0.

function expandedForm(num) {
  result = []
  let arr = num.toString().split("").reverse()
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] !== "0") {
      result.push(arr[i] + ("0".repeat(i)))
    }
  }
  return result.reverse().join(" + ")
}

console.log(expandedForm(12)) // Should return '10 + 2'
console.log(expandedForm(42)) // Should return '40 + 2'
console.log(expandedForm(70304)) // Should return '70000 + 300 + 4'

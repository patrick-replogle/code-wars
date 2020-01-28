// When you divide the successive powers of 10 by 13 you get the following remainders of the integer divisions:

// 1, 10, 9, 12, 3, 4.

// Then the whole pattern repeats.

// Hence the following method: Multiply the right most digit of the number with the left most number in the sequence shown above, the second right most digit to the second left most digit of the number in the sequence. The cycle goes on and you sum all these products. Repeat this process until the sequence of sums is stationary.

// ...........................................................................

// Example: What is the remainder when 1234567 is divided by 13?

// 7×1 + 6×10 + 5×9 + 4×12 + 3×3 + 2×4 + 1×1 = 178

// We repeat the process with 178:

// 8x1 + 7x10 + 1x9 = 87

// and again with 87:

// 7x1 + 8x10 = 87

// ...........................................................................

// From now on the sequence is stationary and the remainder of 1234567 by 13 is the same as the remainder of 87 by 13: 9

// Call thirt the function which processes this sequence of operations on an integer n (>=0). thirt will return the stationary number.

// thirt(1234567) calculates 178, then 87, then 87 and returns 87.

// thirt(321) calculates 48, 48 and returns 48

function thirt(n) {
  let result = helper(n)
  while(n !== result){
    n = result;
    result = helper(n);
  }
  return result;
}

function helper(n) {
  let arr = n.toString().split("").reverse().map(e => Number(e))
  let multBy = [1, 10, 9, 12, 3, 4]
  let result = [];
  for(let i = 0; i < arr.length; i++) {
    result.push(arr[i] * multBy[i%6])
  }
  return result.reduce((a, b) => a + b) 
}

//best practice solutions 
//#1
function thirt(n) {
  const nums = [1,10,9,12,3,4]
  var sum = (''+n).split('').reverse().reduce((sum,v,i) => sum + v * nums[i%nums.length], 0)
  return sum === n ? n : thirt(sum)
}

//#2
const remainders = [1, 10, 9, 12, 3, 4];

function thirt(n) {
    const r = n
      .toString()
      .split('')
      .reverse()
      .reduce( (a,b, index) => parseInt(a) + b*remainders[index%remainders.length] );

      return n === r ? parseInt(n) : thirt(r);
      
}

//#3
function thirt(n) {
var arr = [1, 10, 9, 12, 3, 4];
var num = n;
while ( num >=100) {
  var sum = 0;
  var newArr = num.toString().split("").reverse();
  for (var i = 0; i< newArr.length; i++) {
    sum+=Number(newArr[i])*arr[i%6];
  }
  num = sum;
  }

return num;
}



console.log(thirt(1234567))

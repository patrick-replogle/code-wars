// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// solution('camelCasing') // => should return 'camel Casing'

//mysolution
function solution(string) {
    return string.split(/(?=[A-Z])/).join(' ')
}

//other solution
//#1
function solution(string) {
  return(string.replace(/([A-Z])/g, ' $1'));
}


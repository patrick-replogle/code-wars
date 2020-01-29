//Given a number, return a string with dash'-'marks before and after each odd integer, but do not begin or end the string with a dash mark.

//Ex:
//dashatize(274) -> '2-7-4'
//dashatize(6815) -> '68-1-5'

function dashatize(num) {
   return num.toString().
      replace(/([13579])/g,'-$1-'). // dashes around odd digits
      replace(/--/g,'-').//replace double dashes with single dash
      replace(/^-/, "").//replace start of string if it equals a "-"
      replace(/-$/, "")//replace last part of string if it equals a "-"
}

//other best practice solutions

//#1
function dashatize(num) {
  return isNaN(num) ? 'NaN' : num.toString().match(/([13579]|[02468]+)/g).join('-');
};

//#2
function dashatize(num) {
  return num = num.toString().split("").map(function(c){
    return c % 2 ? "-" + c + "-" :  c ;
  }).join("").split("-").filter(a => a != "").join("-");
  
};

//#3
function dashatize(num) {
 return (!num)
    ? num + ''
    : String(num)
         .match(/[02468]+|[13579]/g)
         .join('-')
};

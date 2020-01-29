// Introduction
// There is a war and nobody knows - the alphabet war!
// There are two groups of hostile letters. The tension between left side letters and right side letters was too high and the war began. The letters called airstrike to help them in war - dashes and dots are spreaded everywhere on the battlefield.

// Task
// Write a function that accepts fight string consists of only small letters and * which means a bomb drop place. Return who wins the fight after bombs are exploded. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.

// The left side letters and their power:

//  w - 4
//  p - 3 
//  b - 2
//  s - 1
// The right side letters and their power:

//  m - 4
//  q - 3 
//  d - 2
//  z - 1
// The other letters don't have power and are only victims.
// The * bombs kills the adjacent letters ( i.e. aa*aa => a___a, **aa** => ______ );

// Example
// alphabetWar("s*zz");           //=> Right side wins!
// alphabetWar("*zd*qm*wp*bs*"); //=> Let's fight again!
// alphabetWar("zzzz*s*");       //=> Right side wins!
// alphabetWar("www*www****z");  //=> Left side wins!

//my solution 

let leftLetters = {
    "w": 4,
    "p": 3,
    "b": 2,
    "s": 1
  }
 
  let rightLetters = {
    "m": 4,
    "q": 3,
    "d": 2,
    "z": 1
  }

function alphabetWar(fight){
  //create a new array without the asterisk or adjoining letters
  let arr = [];
  for(let j = 0; j < fight.length; j++){
    if(fight[j] !== "*" && fight[j-1] !== "*" && fight[j+1] !== "*"){
       arr.push(fight[j])
    }
  }
  //declare variables to hold the score for each side and loop thru the new array 
  let leftSum = 0;
  let rightSum = 0;
  for(let i = 0; i < arr.length; i++){
    if(leftLetters[arr[i]]) {
      leftSum += leftLetters[arr[i]]
    } else if(rightLetters[arr[i]]) {
      rightSum += rightLetters[arr[i]]
    }
  }
  //now return the correct string depending upon the score
  if(leftSum > rightSum) {
    return "Left side wins!"
  } else if(rightSum > leftSum) {
    return 'Right side wins!'
  } else {
    return 'Let\'s fight again!'
  }
}

//best practice solutions:
//#1:
const map = {w:-4, p:-3, b:-2, s:-1, m:4, q:3, d:2, z:1}

function alphabetWar(fight){
  var res = fight.replace(/[^*]?\*[^*]?/g, '').split('').reduce((a,b) => a + (map[b] || 0), 0);
  return res ? (res < 0 ? 'Left' : 'Right') + ' side wins!' : 'Let\'s fight again!';
}

//#2
function alphabetWar(fight){
  var filterStr = fight.replace(/\w?\*+\w?/g,'');
  
  let mapObj = { w: -4, p: -3, b: -2, s: -1, m: 4, q: 3, d: 2, z: 1 };
  
  let result = filterStr.split('').reduce((a, b) => a + (mapObj[b] || 0), 0);   
    
  return result ? (result < 0 ? "Left" : "Right") + " side wins!" : "Let's fight again!"; 
  
  

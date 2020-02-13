// Introduction
//  	Slot machine (American English), informally fruit machine (British English), puggy (Scottish English slang), the slots (Canadian and American English), poker machine (or pokies in slang) (Australian English and New Zealand English) or simply slot (American English), is a casino gambling machine with three or more reels which spin when a button is pushed. Slot machines are also known as one-armed bandits because they were originally operated by one lever on the side of the machine as distinct from a button on the front panel, and because of their ability to leave the player in debt and impoverished. Many modern machines are still equipped with a legacy lever in addition to the button. (Source Wikipedia)
 

// Task
//  	You will be given three reels of different images and told at which index the reels stop. From this information your job is to return the score of the resulted reels.
// Rules
//  	1. There are always exactly three reels
// 2. Each reel has 10 different items.
// 3. The three reel inputs may be different.
// 4. The spin array represents the index of where the reels finish.
// 5. The three spin inputs may be different
// 6. Three of the same is worth more than two of the same
// 7. Two of the same plus one "Wild" is double the score.
// 8. No matching items returns 0.
// Scoring
// Item
// Three of the same
// Two of the same
// Two of the same plus one Wild
// Wild

 
// Returns
//  	Return an integer of the score.
// Example
// Initialise
// reel1 = ["Wild","Star","Bell","Shell","Seven","Cherry","Bar","King","Queen","Jack"];
// reel2 = ["Wild","Star","Bell","Shell","Seven","Cherry","Bar","King","Queen","Jack"];
// reel3 = ["Wild","Star","Bell","Shell","Seven","Cherry","Bar","King","Queen","Jack"];
// spin = [5,5,5];
// result = fruit([reel1,reel2,reel3],spin);
// Scoring
// reel1[5] == "Cherry"
// reel2[5] == "Cherry"
// reel3[5] == "Cherry"

// Cherry + Cherry + Cherry == 50

function fruit(reels, spins){
  const object = {};
  let array = [reels[0][spins[0]], reels[1][spins[1]], reels[2][spins[2]]];
  let result = 0;
  
  for(let val of array) {
    object[val] ? object[val] = object[val] + 1 : object[val] = 1
  }
  
  if (object['Wild']===3) result+=100;
  if (object['Wild']===2) result+=10;
  if (object['Star']===3) result+=90;
  if (object['Star']===2&&object['Wild']!==1) result+=9;
  if (object['Star']===2&&object['Wild']===1) result+=18;
  if (object['Bell']===3) result+=80;
  if (object['Bell']===2&&object['Wild']!==1) result+=8;
  if (object['Bell']===2&&object['Wild']===1) result+=16;
  if (object['Shell']===3) result+=70;
  if (object['Shell']===2&&object['Wild']!==1) result+=7;
  if (object['Shell']===2&&object['Wild']===1) result+=14;
  if (object['Seven']===3) result+=60;
  if (object['Seven']===2&&object['Wild']!==1) result+=6;
  if (object['Seven']===2&&object['Wild']===1) result+=12;
  if (object['Cherry']===3) result+=50;
  if (object['Cherry']===2&&object['Wild']!==1) result+=5;
  if (object['Cherry']===2&&object['Wild']===1) result+=10;
  if (object['Bar']===3) result+=40;
  if (object['Bar']===2&&object['Wild']!==1) result+=4;
  if (object['Bar']===2&&object['Wild']===1) result+=8;
  if (object['King']===3) result+=30;
  if (object['King']===2&&object['Wild']!==1) result+=3;
  if (object['King']===2&&object['Wild']===1) result+=6;
  if (object['Queen']===3) result+=20;
  if (object['Queen']===2&&object['Wild']!==1) result+=2;
  if (object['Queen']===2&&object['Wild']===1) result+=4;
  if (object['Jack']===3) result+=10;
  if (object['Jack']===2&&object['Wild']!==1) result+=1;
  if (object['Jack']===2&&object['Wild']===1) result+=2;
  return result;
}

// best practice solution #1
function fruit(reels, spins) {
  let map = ['Jack', 'Queen', 'King', 'Bar', 'Cherry', 'Seven', 'Shell', 'Bell', 'Star', 'Wild'];
  
  let [a, b, c] = reels
    .map((reel, i) => map.indexOf(reel[spins[i]]) + 1)
    .sort((a, b) => a - b);

  if (a === b && b === c)
    return a * 10;
    
  if (a === b)
    return c === 10 ? a * 2 : a;
  
  return b === c ? b : 0;
}

// #2

const pairScores = {
  "Wild": 10,
  "Star": 9,
  "Bell": 8,
  "Shell": 7,
  "Seven": 6,
  "Cherry": 5,
  "Bar": 4,
  "King": 3,
  "Queen": 2,
  "Jack": 1
}

function fruit(reels, spins) {
  const a = reels[0][spins[0]]
  const b = reels[1][spins[1]]
  const c = reels[2][spins[2]]
  
  if (a === b && b === c) {
    return 10 * pairScores[a]
  }
  
  if (a === b) {
    return pairScores[a] * (c === "Wild" ? 2 : 1)
  } else if (b === c) {
    return pairScores[b] * (a === "Wild" ? 2 : 1)
  } else if (a === c) {
    return pairScores[c] * (b === "Wild" ? 2 : 1)
  }
  
  return 0
}

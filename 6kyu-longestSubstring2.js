// Task
// You are given a string s. It's a string consist of letters, numbers or symbols.

// Your task is to find the Longest substring consisting of unique characters in s, and return the length of it.

// solution 1
function longestSubstringOf(s){
  if(s.length === 0) return 0
  
  let longest = 0;
  let set = new Set()
  let r = 0
  let l = 0
  
  while(r < s.length) {
    if(!set.has(s[r])) {
      set.add(s[r])
      r++
      longest = Math.max(longest, r-l)
    } else {
      set.delete(s[l])
      l++
    }
  }
  return longest
}


// solution 2
function longestSubstringOf(s){
  let seen = {}
  let start = 0
  let max = 0
  for(let i = 0; i < s.length; i++) {
    if(seen.hasOwnProperty(s[i]) && start <= seen[s[i]]) {
      start = seen[s[i]] + 1
    } else {
      max = Math.max(max, i - start + 1)
    }
    seen[s[i]] = i
  }
  return max
}

// solution 3
function longestSubstringOf(s){
  if(s.length === 0) return 0
  
  let max = 0
  let l = 0
  let r = 0
  let arr = []
  
  while(l < s.length && r < s.length) {
    let char = s.charAt(r)
    if(!arr.includes(char)) {
      arr.push(char)
      r++
      max = Math.max(max, r-l)
    } else {
      arr.shift()
      l++
    }
  }
  return max
}

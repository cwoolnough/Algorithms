function recursiveRange(num) {
  if(num === 0) return 0;
  return num + recursiveRange(num -1)
}

function recursiveRange(num) {
  let total = 0;
  for(let i = 0; i <= num; i++) {
    total += i
  }
  return total;
 
}

console.log(recursiveRange(3))
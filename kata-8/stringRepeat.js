// normal for loop.
function repeatStr (n, s) {
  repeatedStr = '';
  for(let i = 0; i < n; i++) {
    repeatedStr += s;
  }
  return repeatedStr;
}


console.log(repeatStr(3, "*"), "***");
console.log(repeatStr(5, "#"), "#####");
console.log(repeatStr(2, "ha "), "ha ha ");
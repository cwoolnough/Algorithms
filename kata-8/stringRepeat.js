// normal for loop.
function repeatStr (n, s) {
  repeatedStr = '';
  for(let i = 0; i < n; i++) {
    repeatedStr += s;
  }
  return repeatedStr;
}

// while loop
function repeatStr (n, s) {
  let rStr = '';

  while (n > 0) {
    rStr += s;
    n--
  }
  return rStr;
}

// using built in repeat method
function repeatStr (n, s) {
  return s.repeat(n);
}


console.log(repeatStr(3, "*"), "***");
console.log(repeatStr(5, "#"), "#####");
console.log(repeatStr(2, "ha "), "ha ha ");
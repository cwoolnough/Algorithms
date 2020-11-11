function power(base, exponent){
  let total = 1;
  for(let i = 1; i <= exponent; i++) {
    total *= base
  }
  return total;
}

function power(base, exponent) {
  if(exponent === 0) return 1;

  return base * power(base, exponent -1);
}

console.log(power(2, 3));
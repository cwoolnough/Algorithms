function setAlarm(employed, vacation){
  return employed  && !vacation
}

console.log(!setAlarm(true, true), "Should be false.");
console.log(!setAlarm(false, true), "Should be false.");
console.log(setAlarm(true, false), "Should be true.");
function getMiddle(str) {
  const middleIndex = str.length;

  if(middleIndex % 2) {
    return str[(middleIndex - 1) / 2];
  } else {
    return str[middleIndex / 2 - 1] + str[middleIndex / 2]
  }
}

function getMiddle(str) {
  const length = str.length / 2;
  return str.substring(Math.ceil(length) - 1, Math.floor(length) + 1)
}



console.log(getMiddle("test"),"es");
console.log(getMiddle("testing"),"t");
console.log(getMiddle("middle"),"dd");
console.log(getMiddle("A"),"A");
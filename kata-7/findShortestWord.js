function findShort(s){
  const wordsArray = s.split(' ');
  let shortest = wordsArray[0].length;

  for(let i = 0; i < wordsArray.length; i++) {
    let wordLength = wordsArray[i].length;
    if(wordLength < shortest) {
      shortest = wordLength
    }
  }
  return shortest
}

function findShort(s){
  const wordsArray = s.split(' ');
  let shortest = wordsArray[0].length;

  // iterate over the array
  for(let word of wordsArray) {
    let wordLength = word.length;
    if(wordLength < shortest) {
      shortest = wordLength
    }
  }
  return shortest
}

function findShort(s){
  const wordArr = s.split(' ')[0].length
  return s.split(' ').reduce((wordLength, currentWord) => {
    return Math.min(wordLength, currentWord.length)
  }, wordArr)
}

function findShort(s){
  const wordArr = s.split(' ');
  return s.split(' ').sort((a, b) => b.length - a.length).pop().length
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"), 3);
console.log(findShort("turns out random test cases are easier than writing out basic ones"), 3)
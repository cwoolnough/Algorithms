function capitalizeWord(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function capitalizeWord(word) {
  return word[0].toUpperCase() + word.slice(1);
}

function capitalizeWord(word) {
  capitalizeWord = word[0].toUpperCase()
  for(let c of capitalizeWord) {
    capitalizeWord += word.slice(1);
  }
  return capitalizeWord;
}



console.log(capitalizeWord('word'), 'Word'),
console.log(capitalizeWord('i'), 'I'),
console.log(capitalizeWord('glasswear'), 'Glasswear');
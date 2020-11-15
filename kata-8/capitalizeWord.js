function capitalizeWord(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function capitalizeWord(word) {
  return word[0].toUpperCase() + word.slice(1);
}

function capitalizeWord(word) {
  capitalizeFirst = word[0].toUpperCase()
  for(let c of capitalizeFirst) {
    capitalizeFirst += word.slice(1);
  }
  return capitalizeFirst;
}



console.log(capitalizeWord(['car','taco','banana']), 'Word'),
console.log(capitalizeWord('i'), 'I'),
console.log(capitalizeWord('glasswear'), 'Glasswear');
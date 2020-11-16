function capitalizeWord(arr) {
  let newWord = []

  for(let word of arr) {
    newWord.push(word.toUpperCase())
  }
  return newWord;
}

function capitalizeWord(arr, newArray = []) {
  if (arr.length === 0) return newArray;

  newArray.push(arr[0].toUpperCase());
  return capitalizeWord(arr.slice(1), newArray)
}

console.log(capitalizeWord(['i', 'am', 'learning', 'recursion']));
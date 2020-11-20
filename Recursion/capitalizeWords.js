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

function capitalizeWord(array) {
  if (array.length === 1) {
    return [array[0].toUpperCase()];
  } 

  let res = capitalizeWord(array.slice(0, -1))
  res.push(array.slice(array.length -1)[0].toUpperCase());
  return res;
}


console.log(capitalizeWord(['i', 'am', 'learning', 'recursion']));
function removeConsecutiveDuplicates(str) {
  // Split the string into an array of individual words
  const arr = str.split(' ');
  let finalStr = ''

  // iterate over the array
  for (let i = 0; i < arr.length; i++){
    let word = arr[i]
    // if current work is not the same as the next, add it to the final str
    if(word !== arr[i + 1]) {
      finalStr += word + ' ';
    }
  }
  return finalStr.trim('')
} 



 
console.log(removeConsecutiveDuplicates('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'), 'alpha beta gamma delta alpha beta gamma delta');

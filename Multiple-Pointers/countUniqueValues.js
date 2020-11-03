function countUniqueValues(arr){
  // create a new Set that checks for uniqueness.
  return new Set(arr).size
}

function countUniqueValues(arr){
    if(!arr.length) return 0;
    // set a left pointer
    let i = 0;
    // set a right pointer
    for(let j = 1; j < arr.length; j++){
      if(arr[i] !== arr[j]){
        i++;
        arr[i] = arr[j];
      }
    }
    return i + 1;
}



console.log(countUniqueValues([1, 1, 1, 1, 1, 1, 1, 2])); 
console.log(countUniqueValues([1, 2, 13, 1, 13, 4, 1, 2]));
console.log(countUniqueValues([1, 4, 5, 1, 6, 1, 7, 2]));
console.log(countUniqueValues([]));

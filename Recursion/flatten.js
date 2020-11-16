function flatten(arr){
  let newArr = []

  if(arr.length === 0) return newArr

  newArr = newArr.concat(flatten(arr.slice(1)));

  return newArr;

}



console.log(flatten([1, 2, 3, [4, 5] ])) // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]]))
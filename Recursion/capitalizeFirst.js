function capitalizeFirst(arr) {
  if(arr.length === 0) return arr
    return [arr[0][0].toUpperCase() + arr[0].slice(1)]
    .concat(capitalizeFirst(arr.splice(1))); 
}

console.log(capitalizeFirst(['car','taco','banana']));
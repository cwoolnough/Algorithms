function arrayPlusArray(arr1, arr2) {
  const flattened = [...arr1, ...arr2];
  return flattened.reduce((acc, value) => acc + value, 0)
}

// accepts indefinite number of arrays
function arrayPlusArray(...arrays) {
  return [].concat(...arrays).reduce((a, v) => a + v, 0)
}

console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]), 21);
console.log(arrayPlusArray([-1, -2, -3], [-4, -5, -6]), -21);
console.log(arrayPlusArray([0, 0, 0], [4, 5, 6]), 15);
console.log(arrayPlusArray([100, 200, 300], [400, 500, 600]), 2100);
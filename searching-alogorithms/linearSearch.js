
// O(n)
function linearSearch(arr, value) {
  for(let i = 0; 1 < arr.length; i++) {
    if(arr[i] === value) return i;
  }
    return -1;
}

console.log(linearSearch([1, 4, 5, 6, 7, 10, 33], 11));
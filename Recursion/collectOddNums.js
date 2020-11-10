
// using helper method recursion
function collectOdds(arr) {
  let result = [];

  function helper(input) {
    // Check if there is a number otherwise just return.
    if(!input.length) return;
    // if first element is odd
    if(input[0] % 2 !== 0) {
      result.push(input[0]);
    }
    // call the function again without the first element.
    helper(input.slice(1));
  }
  helper(arr);

  return result;
}

// pure recursion
function collectOdds(arr) {
  let newArr = [];

  // guard against nothing in the array
  if(arr.length === 0){
    return newArr;
  }

  // check if the first number in the array is odd.
  if(arr[0] % 2 !== 0) {
    // if it is odd, push into newArr.
    newArr.push(arr[0]);
  }

  newArr = newArr.concat(collectOdds(arr.slice(1)));
  return newArr
}

console.log(collectOdds([1, 2, 3, 4, 5]))
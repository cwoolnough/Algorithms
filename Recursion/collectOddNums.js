function collectOdds(arr) {
  let result = [];

  function helper(input) {
    // Check if there is a number otherwise just return.
    if(!input.length) return;
    // if first element is odd
    if(input[0] % 2 === 0) {
      result.push(input[0]);
    }
    // call the function again without the first element.
    helper(input.slice(1));
  }
  helper(arr);

  return result;
}

console.log(collectOdds([1, 2, 3, 4, 5, 6, 7, 8, 9]))

// Nested loop
function sumZero(arr) {
  for(let i = 0; i < arr.length; i++) {
    for(let j = i+1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]]
      }
    }
  }
}

function sumZero(arr) {
  // set a left pointer
  let left = 0;
  // set a right pointer
  let right = arr.length -1;

  while(left < right) {
    // check the sum of left and the right
    let sum = arr[left] + arr[right]
    // check if sum is 0, if it is return
    if(sum === 0) {
      return [arr[left], arr[right]]
      // if its more than 0, subtracted one position from the right.
    } else if(sum > 0){
      right--;
    } else {
      left++
    }
  }
}

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]));
console.log(sumZero([-2, 0, 1, 3]));
console.log(sumZero([1, 2, 3]));
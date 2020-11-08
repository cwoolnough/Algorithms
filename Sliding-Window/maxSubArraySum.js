function maxSubArraySum(arr, num){
  let maxSum = 0;
  let tempSum = 0;
  if(arr.length < num) return null;
  // add up the first 3 digits and set maxSum to that amount.
  for(let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum; 
  for(let i = num; i < arr.length; i++){
    // remove one from the beginning and add one
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}



console.log(maxSubArraySum([1, 1, 1, 1, 1, 1, 1, 2], 3)); 
console.log(maxSubArraySum([1, 2, 13, 1, 13, 4, 1, 2], 2));
console.log(maxSubArraySum([1, 4, 5, 1, 6, 1, 7, 2], 3));
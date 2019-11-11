function maps(numbers) {
  // a place to store the doubled values
  let doubled = [];

  // iterate over the array of numbers
  for(let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    // double the current number and add it to the doubled values array
    const doubledNumber = number * 2;
    doubled.push(doubledNumber);
  }
  // return the doubled values array
  return doubled;
}


function maps(numbers){
  const doubled = [];

  numbers.forEach(number => {
    const doubledNumber = number * 2;
    doubled.push(doubledNumber);
  });
  return doubled;
}

function maps(numbers) {
  const doubled = [];

  for(const number of numbers) {
    const doubledNumber = number * 2;
    doubled.push(doubledNumber);
  }
  return doubled
}


console.log(maps([1, 2, 3], [2, 4, 6]));
console.log(maps([4, 1, 1, 1, 4], [8, 2, 2, 2, 8]));

function fib(num) {
  if(num === 0) return 0;
  if(num === 1) return 1;

  return (fib(num -2) + fib(num -1))
}

console.log(fib(28));
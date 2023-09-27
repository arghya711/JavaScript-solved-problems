function isDivisible(number, x, y) {
    return number % x === 0 && number % y === 0;
  }
  
  const num = 12;
  const x = 3;
  const y = 4;
  
  if (isDivisible(num, x, y)) {
    console.log(`${num} is divisible by both ${x} and ${y}`);
  } else {
    console.log(`${num} is not divisible by both ${x} and ${y}`);
  }
  
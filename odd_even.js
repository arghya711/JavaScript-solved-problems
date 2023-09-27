function check(number) {
    if (number % 2 === 0) {
      return "Even";
    } else {
      return "Odd";
    }
  }
  const num = 15;
  const result = check(num);
  console.log(`${num} is ${result}`);
  
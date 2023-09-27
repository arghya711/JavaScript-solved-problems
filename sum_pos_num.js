function sumOfPositiveNumbers(num) {
  if (num < 1) {
    return "Number should be greater than 0.";
  }

  let sum = 0;

  for (let i = 1; i <= num; i++) {
    sum += i;
  }

  return sum;
}

const num = 15; 
const positiveSum = sumOfPositiveNumbers(num);

console.log(` sum of positive numbers from 1 to ${num} is: ${positiveSum}`);

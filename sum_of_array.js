function arraySum(arr) {
    const sum = 0;
  
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
  
    return sum;
  }
  
  const elements = [12, 76, 3, 15, 50];
  const totalSum = arraySum(elements);
  
  console.log(`The sum of all elements is: ${totalSum}`);
  
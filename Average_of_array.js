function Average(arr) {
    if (arr.length === 0) {
      return undefined; 
    }
  
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
  
    return sum / arr.length;
  }
  
  const elements = [5, 2, 9, 1, 7];
  const avg =Average(elements);
  
  console.log(`The average is: ${avg}`);
  
function remove(inputString) {
    if (inputString.length < 3) {
      return "String is short!";
    }
  
    return inputString.slice(1, -1);
  }
  
  const original = "Hello World";
  const modified = remove(original);
  
  console.log(`Original String: "${original}"`);
  console.log(`Modified String: "${modified}"`);
  
function removeSpaces(inputString) {
    return inputString.replace(/\s/g, "");
  }
  
  const originalString = "Hello there, good evening!";
  const remove_space = removeSpaces(originalString);
  
  console.log(`Original String: "${originalString}"`);
  console.log(`String without Spaces: "${remove_space}"`);
  
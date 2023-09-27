function Operation(num1, num2, op) {
    let result;
  
    switch (op) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        if (num2 !== 0) {
          result = num1 / num2;
        } else {
          result = "Division by zero is not allowed.";
        }
        break;
      default:
        result = "Invalid operator.";
        break;
    }
  
    return result;
  }
  
 
  const num1 = 10;
  const num2 = 5;
  const additionResult = Operation(num1, num2, "+");
  const subtractionResult = Operation(num1, num2, "-");
  const multiplicationResult = Operation(num1, num2, "*");
  const divisionResult = Operation(num1, num2, "/");
  
  console.log(`Addition: ${num1} + ${num2} = ${additionResult}`);
  console.log(`Multiplication: ${num1} * ${num2} = ${multiplicationResult}`);
  console.log(`Subtraction: ${num1} - ${num2} = ${subtractionResult}`);
  console.log(`Division: ${num1} / ${num2} = ${divisionResult}`);
  
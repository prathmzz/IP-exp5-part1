function performOperation(num1, num2, operation) {
  return new Promise((resolve, reject) => {
    if (typeof num1 !== "number" || typeof num2 !== "number") {
      return reject("Invalid input: Both arguments must be numbers.");
    }

    switch (operation) {
      case "add":
        resolve(num1 + num2);
        break;
      case "subtract":
        resolve(num1 - num2);
        break;
      case "multiply":
        resolve(num1 * num2);
        break;
      case "divide":
        if (num2 === 0) {
          reject("Error: Division by zero.");
        } else {
          resolve(num1 / num2);
        }
        break;
      default:
        reject(
          "Invalid operation: Supported operations are add, subtract, multiply, divide."
        );
    }
  });
}

// Example usage
const num1 = 10;
const num2 = 5;

performOperation(num1, num2, "add")
  .then((result) => console.log(`Addition Result: ${result}`))
  .catch((error) => console.error(error));

performOperation(num1, num2, "divide")
  .then((result) => console.log(`Division Result: ${result}`))
  .catch((error) => console.error(error));

performOperation(num1, 0, "divide")
  .then((result) => console.log(`Division Result: ${result}`))
  .catch((error) => console.error(error));

performOperation(num1, num2, "unknown")
  .then((result) => console.log(`Unknown Operation Result: ${result}`))
  .catch((error) => console.error(error));

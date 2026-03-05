/**
 * Node.js CLI Calculator
 *
 * Supported operations:
 *   - add        : Addition – adds two or more numbers
 *   - subtract   : Subtraction – subtracts numbers from the first operand
 *   - multiply   : Multiplication – multiplies numbers together
 *   - divide     : Division – divides the first number by the second (handles division by zero)
 *   - modulo     : Modulo – returns the remainder of a divided by b (handles modulo by zero)
 *   - power      : Exponentiation – raises base to the exponent
 *   - sqrt       : Square root – returns the square root of n (handles negative numbers)
 *
 * Usage:
 *   node calculator.js <operation> <num1> <num2> [... more numbers]
 *
 * Examples:
 *   node calculator.js add 2 3
 *   node calculator.js subtract 10 4
 *   node calculator.js multiply 5 6
 *   node calculator.js divide 20 4
 *   node calculator.js modulo 10 3
 *   node calculator.js power 2 8
 *   node calculator.js sqrt 16
 */

/**
 * Addition – adds all provided numbers together
 */
function add(nums) {
  return nums.reduce((sum, n) => sum + n, 0);
}

/**
 * Subtraction – subtracts subsequent numbers from the first
 */
function subtract(nums) {
  return nums.reduce((diff, n, i) => (i === 0 ? n : diff - n));
}

/**
 * Multiplication – multiplies all provided numbers together
 */
function multiply(nums) {
  return nums.reduce((product, n) => product * n, 1);
}

/**
 * Division – divides the first number by the second
 * Throws an error if division by zero is attempted
 */
function divide(nums) {
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === 0) {
      throw new Error("Division by zero is not allowed.");
    }
  }
  return nums.reduce((quotient, n, i) => (i === 0 ? n : quotient / n));
}

/**
 * Modulo – returns the remainder of a divided by b
 * Throws an error if modulo by zero is attempted
 */
function modulo(a, b) {
  if (b === 0) {
    throw new Error("Modulo by zero is not allowed.");
  }
  return a % b;
}

/**
 * Exponentiation – raises base to the exponent
 */
function power(base, exponent) {
  return Math.pow(base, exponent);
}

/**
 * Square root – returns the square root of n
 * Throws an error if n is negative
 */
function squareRoot(n) {
  if (n < 0) {
    throw new Error("Square root of a negative number is not allowed.");
  }
  return Math.sqrt(n);
}

// Export functions for testing
module.exports = { add, subtract, multiply, divide, modulo, power, squareRoot };

// CLI entry point – only runs when executed directly
if (require.main === module) {
  const args = process.argv.slice(2);
  const operation = args[0];
  const numbers = args.slice(1).map(Number);

  // Validate that an operation was provided
  if (!operation) {
    console.error("Error: No operation provided.");
    console.error("Usage: node calculator.js <add|subtract|multiply|divide|modulo|power|sqrt> <num1> [num2] [...]");
    process.exit(1);
  }

  // sqrt requires exactly one number; all others require at least two
  const isSingleArgOp = operation.toLowerCase() === "sqrt";
  if (!isSingleArgOp && numbers.length < 2) {
    console.error("Error: At least two numbers are required.");
    console.error("Usage: node calculator.js <add|subtract|multiply|divide|modulo|power|sqrt> <num1> [num2] [...]");
    process.exit(1);
  }

  // Validate that all arguments are valid numbers
  if (numbers.some(isNaN)) {
    console.error("Error: All arguments after the operation must be valid numbers.");
    process.exit(1);
  }

  // Execute the requested operation
  try {
    let result;
    switch (operation.toLowerCase()) {
      case "add":
        result = add(numbers);
        break;
      case "subtract":
        result = subtract(numbers);
        break;
      case "multiply":
        result = multiply(numbers);
        break;
      case "divide":
        result = divide(numbers);
        break;
      case "modulo":
        result = modulo(numbers[0], numbers[1]);
        break;
      case "power":
        result = power(numbers[0], numbers[1]);
        break;
      case "sqrt":
        result = squareRoot(numbers[0]);
        break;
      default:
        console.error(`Error: Unknown operation '${operation}'.`);
        console.error("Supported operations: add, subtract, multiply, divide, modulo, power, sqrt");
        process.exit(1);
    }
    console.log(`Result: ${result}`);
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }
}

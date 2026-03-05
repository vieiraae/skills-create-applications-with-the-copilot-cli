const { add, subtract, multiply, divide, modulo, power, squareRoot } = require("../calculator");

// ──────────────────────────────────────────────
// Addition tests
// ──────────────────────────────────────────────
describe("add", () => {
  test("adds two positive numbers (2 + 3 = 5)", () => {
    expect(add([2, 3])).toBe(5);
  });

  test("adds multiple numbers", () => {
    expect(add([1, 2, 3, 4])).toBe(10);
  });

  test("adds negative numbers", () => {
    expect(add([-1, -2])).toBe(-3);
  });

  test("adds mixed positive and negative numbers", () => {
    expect(add([10, -3])).toBe(7);
  });

  test("adds with zero", () => {
    expect(add([5, 0])).toBe(5);
  });

  test("adds decimal numbers", () => {
    expect(add([1.5, 2.5])).toBe(4);
  });

  test("adds large numbers", () => {
    expect(add([1000000, 2000000])).toBe(3000000);
  });
});

// ──────────────────────────────────────────────
// Subtraction tests
// ──────────────────────────────────────────────
describe("subtract", () => {
  test("subtracts two positive numbers (10 - 4 = 6)", () => {
    expect(subtract([10, 4])).toBe(6);
  });

  test("subtracts multiple numbers sequentially", () => {
    expect(subtract([20, 5, 3])).toBe(12);
  });

  test("subtracts resulting in a negative number", () => {
    expect(subtract([3, 10])).toBe(-7);
  });

  test("subtracts negative numbers", () => {
    expect(subtract([-5, -3])).toBe(-2);
  });

  test("subtracts zero", () => {
    expect(subtract([8, 0])).toBe(8);
  });

  test("subtracts from zero", () => {
    expect(subtract([0, 5])).toBe(-5);
  });

  test("subtracts decimal numbers", () => {
    expect(subtract([10.5, 3.2])).toBeCloseTo(7.3);
  });
});

// ──────────────────────────────────────────────
// Multiplication tests
// ──────────────────────────────────────────────
describe("multiply", () => {
  test("multiplies two positive numbers (45 * 2 = 90)", () => {
    expect(multiply([45, 2])).toBe(90);
  });

  test("multiplies multiple numbers", () => {
    expect(multiply([2, 3, 4])).toBe(24);
  });

  test("multiplies by zero", () => {
    expect(multiply([100, 0])).toBe(0);
  });

  test("multiplies by one (identity)", () => {
    expect(multiply([42, 1])).toBe(42);
  });

  test("multiplies negative numbers", () => {
    expect(multiply([-3, -4])).toBe(12);
  });

  test("multiplies positive and negative numbers", () => {
    expect(multiply([5, -3])).toBe(-15);
  });

  test("multiplies decimal numbers", () => {
    expect(multiply([2.5, 4])).toBe(10);
  });

  test("multiplies large numbers", () => {
    expect(multiply([1000, 1000])).toBe(1000000);
  });
});

// ──────────────────────────────────────────────
// Division tests
// ──────────────────────────────────────────────
describe("divide", () => {
  test("divides two positive numbers (20 / 5 = 4)", () => {
    expect(divide([20, 5])).toBe(4);
  });

  test("divides with a remainder", () => {
    expect(divide([10, 3])).toBeCloseTo(3.3333);
  });

  test("divides multiple numbers sequentially", () => {
    expect(divide([100, 5, 2])).toBe(10);
  });

  test("divides negative numbers", () => {
    expect(divide([-12, -3])).toBe(4);
  });

  test("divides positive by negative", () => {
    expect(divide([15, -3])).toBe(-5);
  });

  test("divides zero by a number", () => {
    expect(divide([0, 5])).toBe(0);
  });

  test("divides by one (identity)", () => {
    expect(divide([7, 1])).toBe(7);
  });

  test("divides decimal numbers", () => {
    expect(divide([7.5, 2.5])).toBe(3);
  });

  // Edge case: division by zero
  test("throws error when dividing by zero", () => {
    expect(() => divide([10, 0])).toThrow("Division by zero is not allowed.");
  });

  test("throws error when any divisor is zero in chain", () => {
    expect(() => divide([100, 5, 0])).toThrow("Division by zero is not allowed.");
  });
});

// ──────────────────────────────────────────────
// Modulo tests (5 % 2 from image)
// ──────────────────────────────────────────────
describe("modulo", () => {
  test("returns remainder of two positive numbers (5 % 2 = 1)", () => {
    expect(modulo(5, 2)).toBe(1);
  });

  test("returns zero when evenly divisible", () => {
    expect(modulo(10, 5)).toBe(0);
  });

  test("returns remainder with larger divisor", () => {
    expect(modulo(3, 7)).toBe(3);
  });

  test("handles negative dividend", () => {
    expect(modulo(-7, 3)).toBe(-1);
  });

  test("handles negative divisor", () => {
    expect(modulo(7, -3)).toBe(1);
  });

  test("handles decimal numbers", () => {
    expect(modulo(5.5, 2)).toBeCloseTo(1.5);
  });

  test("modulo of zero by a number returns zero", () => {
    expect(modulo(0, 5)).toBe(0);
  });

  // Edge case: modulo by zero
  test("throws error when modulo by zero", () => {
    expect(() => modulo(10, 0)).toThrow("Modulo by zero is not allowed.");
  });
});

// ──────────────────────────────────────────────
// Exponentiation tests (2 ^ 3 from image)
// ──────────────────────────────────────────────
describe("power", () => {
  test("raises base to exponent (2 ^ 3 = 8)", () => {
    expect(power(2, 3)).toBe(8);
  });

  test("raises to the power of zero (any number ^ 0 = 1)", () => {
    expect(power(5, 0)).toBe(1);
  });

  test("raises to the power of one (identity)", () => {
    expect(power(7, 1)).toBe(7);
  });

  test("raises zero to a positive exponent", () => {
    expect(power(0, 5)).toBe(0);
  });

  test("handles negative exponent", () => {
    expect(power(2, -2)).toBe(0.25);
  });

  test("handles negative base with even exponent", () => {
    expect(power(-3, 2)).toBe(9);
  });

  test("handles negative base with odd exponent", () => {
    expect(power(-3, 3)).toBe(-27);
  });

  test("handles decimal exponent", () => {
    expect(power(4, 0.5)).toBe(2);
  });

  test("handles large exponent", () => {
    expect(power(2, 10)).toBe(1024);
  });
});

// ──────────────────────────────────────────────
// Square root tests (√16 from image)
// ──────────────────────────────────────────────
describe("squareRoot", () => {
  test("returns square root of a perfect square (√16 = 4)", () => {
    expect(squareRoot(16)).toBe(4);
  });

  test("returns square root of another perfect square (√9 = 3)", () => {
    expect(squareRoot(9)).toBe(3);
  });

  test("returns square root of a non-perfect square", () => {
    expect(squareRoot(2)).toBeCloseTo(1.4142);
  });

  test("returns zero for square root of zero", () => {
    expect(squareRoot(0)).toBe(0);
  });

  test("returns one for square root of one", () => {
    expect(squareRoot(1)).toBe(1);
  });

  test("handles decimal input", () => {
    expect(squareRoot(2.25)).toBe(1.5);
  });

  test("handles large number", () => {
    expect(squareRoot(1000000)).toBe(1000);
  });

  // Edge case: square root of a negative number
  test("throws error for square root of a negative number", () => {
    expect(() => squareRoot(-4)).toThrow("Square root of a negative number is not allowed.");
  });

  test("throws error for square root of -1", () => {
    expect(() => squareRoot(-1)).toThrow("Square root of a negative number is not allowed.");
  });
});

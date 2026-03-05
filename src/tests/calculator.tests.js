/**
 * Unit tests for the Node.js CLI Calculator
 *
 * Covers all four supported operations:
 *   + addition, - subtraction, * multiplication, / division
 *
 * Example expressions from calc-basic-operations.png:
 *   2 + 3, 10 - 4, 45 * 2, 20 / 5
 */

const { add, subtract, multiply, divide } = require('../calculator');

// --- Addition ---
describe('add()', () => {
  // basic example from image: 2 + 3 = 5
  test('2 + 3 = 5', () => expect(add(2, 3)).toBe(5));

  test('adds positive numbers', () => expect(add(10, 20)).toBe(30));
  test('adds negative numbers', () => expect(add(-4, -6)).toBe(-10));
  test('adds a positive and negative number', () => expect(add(10, -3)).toBe(7));
  test('adding zero returns the same number', () => expect(add(7, 0)).toBe(7));
  test('adds floating point numbers', () => expect(add(1.5, 2.5)).toBe(4));
});

// --- Subtraction ---
describe('subtract()', () => {
  // basic example from image: 10 - 4 = 6
  test('10 - 4 = 6', () => expect(subtract(10, 4)).toBe(6));

  test('subtracts positive numbers', () => expect(subtract(20, 5)).toBe(15));
  test('subtracts to a negative result', () => expect(subtract(3, 10)).toBe(-7));
  test('subtracts negative numbers', () => expect(subtract(-5, -3)).toBe(-2));
  test('subtracting zero returns the same number', () => expect(subtract(8, 0)).toBe(8));
  test('subtracts floating point numbers', () => expect(subtract(5.5, 2.5)).toBe(3));
});

// --- Multiplication ---
describe('multiply()', () => {
  // basic example from image: 45 * 2 = 90
  test('45 * 2 = 90', () => expect(multiply(45, 2)).toBe(90));

  test('multiplies positive numbers', () => expect(multiply(6, 7)).toBe(42));
  test('multiplies by zero returns zero', () => expect(multiply(99, 0)).toBe(0));
  test('multiplies negative numbers', () => expect(multiply(-3, -4)).toBe(12));
  test('multiplies positive and negative number', () => expect(multiply(5, -3)).toBe(-15));
  test('multiplies by one returns the same number', () => expect(multiply(7, 1)).toBe(7));
  test('multiplies floating point numbers', () => expect(multiply(2.5, 4)).toBe(10));
});

// --- Division ---
describe('divide()', () => {
  // basic example from image: 20 / 5 = 4
  test('20 / 5 = 4', () => expect(divide(20, 5)).toBe(4));

  test('divides positive numbers', () => expect(divide(100, 4)).toBe(25));
  test('divides to a decimal result', () => expect(divide(10, 4)).toBe(2.5));
  test('divides negative numbers', () => expect(divide(-12, -3)).toBe(4));
  test('divides positive by negative', () => expect(divide(9, -3)).toBe(-3));
  test('divides zero by a number returns zero', () => expect(divide(0, 5)).toBe(0));

  // edge case: division by zero
  test('throws an error when dividing by zero', () => {
    expect(() => divide(10, 0)).toThrow('Division by zero is not allowed');
  });
  test('throws when dividing negative number by zero', () => {
    expect(() => divide(-5, 0)).toThrow('Division by zero is not allowed');
  });
});

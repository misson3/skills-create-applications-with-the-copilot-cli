#!/usr/bin/env node

/**
 * Node.js CLI Calculator App
 *
 * Supported operations:
 *   + addition       : adds two numbers
 *   - subtraction    : subtracts the second number from the first
 *   * multiplication : multiplies two numbers
 *   / division       : divides the first number by the second
 */

const readline = require('readline');

/**
 * Addition: returns the sum of a and b.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function add(a, b) {
  return a + b;
}

/**
 * Subtraction: returns the difference of a minus b.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function subtract(a, b) {
  return a - b;
}

/**
 * Multiplication: returns the product of a and b.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function multiply(a, b) {
  return a * b;
}

/**
 * Division: returns the quotient of a divided by b.
 * Throws an error if b is zero.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function divide(a, b) {
  if (b === 0) throw new Error('Division by zero is not allowed');
  return a / b;
}

/**
 * Evaluate a simple expression: <number> <operator> <number>
 * @param {string} input
 * @returns {string} result or error message
 */
function evaluate(input) {
  const match = input.trim().match(/^(-?\d+\.?\d*)\s*([+\-*/x÷])\s*(-?\d+\.?\d*)$/);
  if (!match) return 'Invalid input. Format: <number> <+|-|*|/> <number>';

  const a = parseFloat(match[1]);
  const op = match[2];
  const b = parseFloat(match[3]);

  try {
    switch (op) {
      case '+':           return `${a} + ${b} = ${add(a, b)}`;
      case '-':           return `${a} - ${b} = ${subtract(a, b)}`;
      case '*': case 'x': return `${a} * ${b} = ${multiply(a, b)}`;
      case '/': case '÷': return `${a} / ${b} = ${divide(a, b)}`;
      default:            return `Unknown operator: ${op}`;
    }
  } catch (err) {
    return `Error: ${err.message}`;
  }
}

// --- CLI entry point ---
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

console.log('Node.js CLI Calculator');
console.log('Supported operations: + (addition), - (subtraction), * (multiplication), / (division)');
console.log('Format: <number> <operator> <number>   e.g. 10 + 5');
console.log('Type "exit" or press Ctrl+C to quit.\n');

function prompt() {
  rl.question('> ', (input) => {
    if (input.trim().toLowerCase() === 'exit') {
      rl.close();
      return;
    }
    console.log(evaluate(input));
    prompt();
  });
}

prompt();

module.exports = { add, subtract, multiply, divide };

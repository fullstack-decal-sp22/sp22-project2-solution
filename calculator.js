/** 
 * Part 1: Defining our operations
 */
const add = (a, b) => (a + b)
const subtract = (a, b) => (a - b)
const multiply = (a, b) => (a * b)
const divide = (a, b) => b === 0 ? NaN : (a / b)
const modulo = (a, b) => (a % b)

const operations = {
  '+': add,
  '-': subtract,
  '*': multiply,
  '/': divide,
  '%': modulo
}

function calculations(operator, a, b) {
  return operations[operator](a, b)
}

/**
 * Part 2: Basic calculator logic
 */
class Calculator {
  constructor() {
    this.current = 0
    this.buffer = 0
    this.operator = null
  }

  append(digit) { 
    this.current = this.current * 10 + digit
    return this.current
  }

  clear() {
    this.current = 0
    this.buffer = 0
    this.operator = null
  }

  backspace() {
    this.current = Math.floor(this.current / 10)
    return this.current
  }

  equals() {
    this.current = this.operator === null ?
      current :
      Math.floor(calculations(this.operator, this.buffer, this.current))
    console.log(this.current)
    return this.current
  }

  store(symbol) {
    this.buffer = this.current
    this.current = 0
    this.operator = symbol
    return this.current
  }

  compute(symbol) {
    switch (symbol) {
      case "C":
        this.clear()
        break
      case "←":
        this.backspace()
        break
      case "=":
        this.equals()
        break
      default:
        this.store(symbol)
        break
    }
    return this.current
  }
}

/**
 * Part 3: Interfacing with the DOM
 */
let calculator = new Calculator()
let result = document.querySelector(".result");
function setListeners() {
  let buttons = document.querySelectorAll(".button");
  for (item of buttons) {
    item.addEventListener("click", function (event) {
      click(event.target);
    });
  }
}

setListeners();

function click(button) {
  if (button.classList.contains("number")) {
    calculator.append(parseInt(button.innerText))
  } else {
    calculator.compute(button.innerText);
  }
  result.innerText = calculator.current;
}

module.exports = { 
  operations, 
  calculations,
  Calculator
}
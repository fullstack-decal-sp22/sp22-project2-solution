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
    this.current = 0 //current number that's showing
    this.buffer = 0 //used to store the result of the previous total
    this.operator = null //used to store the operator
    this.total = 0
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
      this.buffer :
      Math.floor(calculations(this.operator, this.buffer, this.current))
      // this.buffer
    console.log(this.current)
    this.operator = null
    this.buffer = 0
  
    return this.current
  }
  // current is going to be set to 0 always in the store
  // bufffer changed to hold previous ccurrent 
  // UNLESS operator exists, then cary it out


  store(symbol) { //called with any operator
    console.log("symbol", symbol)
    console.log("current before", this.current)
    if (this.operator === null) {
      this.buffer = parseInt(this.current)
      this.total = this.current;
    } else {
      this.buffer = calculations(this.operator, this.buffer, parseInt(this.current))
    }
    this.current = 0
    // console.log("bugger before", this.buffer)
    // if (this.operator === null) {
    //   this.buffer += parseInt(this.current) //add if it hasn't seen an operator before
    //   this.current = 0    
    // } else{
    //   this.buffer = calculations(symbol, this.buffer, parseInt(this.current))
    //   this.current = parseInt(this.buffer)
    //   this.operator = null
    // }
    // console.log("buffer", this.buffer)

    // // String(this.buffer)
    // console.log("current", this.current)

    this.operator = symbol
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
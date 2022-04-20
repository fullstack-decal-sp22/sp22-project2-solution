const { operations, calculations } = require("./calculator.js")

// Part 1: Defining the functions
const add = (a, b) => (a + b)
const subtract = (a, b) => (a - b)
const multiply = (a, b) => (a * b)
const divide = (a, b) => (a / b)
const modulo = (a, b) => (a % b)

// Part 2: Mapping our functions
const correct = {
  '+': add,
  '-': subtract,
  '*': multiply,
  '/': divide,
  '%': modulo
}

test('Operators', () => {
    expect(Object.keys(operations)).toEqual(Object.keys(correct))
})

test('Test Map', () => {
    let a = Math.random() * 100
    let b = Math.random() * 100
    for (key of Object.keys(operations)) {
        expect(operations[key](a, b)).toEqual(correct[key](a, b))
    }
})

test('Test Calculations', () => {
    let a = Math.random() * 100
    let b = Math.random() * 100
    // if(operations === null) {return null}
    for (key of Object.keys(operations)) {
        expect(calculations(key, a, b)).toEqual(correct[key](a, b))
    } 
})
const { Calculator } = require("./calculator.js")


test('Test Typing Numbers', () => {
    let calculator = new Calculator()
    calculator.append(3)
    expect(calculator.current).toEqual(3)
    calculator.append(4)
    expect(calculator.current).toEqual(34)    
})

test('Test Subtract', () => {
    let calculator = new Calculator()
    calculator.append(5)
    calculator.append(6)
    calculator.store('-')
    calculator.append(7)
    expect(calculator.equals()).toEqual(49)
})

test('Test Multiply', () => {
    let calculator = new Calculator()
    calculator.append(5)
    calculator.append(6)
    calculator.store('*')
    calculator.append(7)
    expect(calculator.equals()).toEqual(392)
})
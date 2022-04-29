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

test('Test Divide', () => {
    let calculator = new Calculator()
    calculator.append(2)
    calculator.append(4)
    calculator.store('/')
    calculator.append(6)
    expect(calculator.equals()).toEqual(4)
})

test('Test Compute And Clear', () => {
    let calculator = new Calculator()
    calculator.append(5)
    calculator.append(6)
    calculator.store('*')
    calculator.append(7)
    expect(calculator.compute('C')).toEqual(0)
})


test('Test 2 Plus 3 Equals 5 Plus 4 Equals 9', () => {
    let calculator = new Calculator()
    calculator.append(2)
    calculator.store('+')
    calculator.append(3)
    calculator.compute('=')
    calculator.store('+')
    calculator.append(4)
    calculator.compute('=')
    expect(calculator.current).toEqual(9)
})

test('Test Backspace', () => {
    let calculator = new Calculator()
    calculator.append(8)
    calculator.append(4)
    calculator.backspace()
    expect(calculator.current).toEqual(8)
})

test('Test 123 Times 7 Minus 5', () => {
    let calculator = new Calculator()
    calculator.append(1)
    calculator.append(2)
    calculator.append(3)
    calculator.store('*')
    calculator.append(7)
    calculator.store('-')
    calculator.append(5)
    calculator.compute('=')
    expect(calculator.current).toEqual(856)

})

test('Test that 3 operations in a row work: 9 Times 9 Times 9 Minus 6 Equals 723', () => {
    let calculator = new Calculator()
    calculator.append(9)
    calculator.store('*')
    calculator.append(9)
    calculator.store('*')
    calculator.append(9)
    calculator.store('-')
    calculator.append(6)
    calculator.compute('=')
    expect(calculator.current).toEqual(723)

})

test('9 Times 9 Times 9 Equals 729 Minus 6 Equals', () => {
    let calculator = new Calculator()
    calculator.append(9)
    calculator.store('*')
    calculator.append(9)
    calculator.store('*')
    calculator.append(9)
    calculator.compute('=')
    expect(calculator.current).toEqual(729)
    calculator.store('-')
    calculator.append(6)
    calculator.compute('=')
    expect(calculator.current).toEqual(721)

})
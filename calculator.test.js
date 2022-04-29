const { Calculator } = require("./calculator.js")


test('Test Typing Numbers', () => {
    let calculator = new Calculator()
    calculator.append(3)
    expect(calculator.current).toEqual(3)
    calculator.append(4)
    expect(calculator.current).toEqual(34)    
})


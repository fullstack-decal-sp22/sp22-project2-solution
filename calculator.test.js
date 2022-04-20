const { Calculator } = require("./calculator.js")

let calculator = new Calculator()

test('Test Number', () => {
    // let total = 0
    let calculator = new Calculator()
    // let integer = Math.floor(Math.random() * 10)
    // total = total * 10 + integer
    // number(integer)
    calculator.append(3)
    expect(calculator.current).toEqual(3)
    calculator.append(4)
    expect(calculator.current).toEqual(34)    
})

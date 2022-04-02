const { number, symbol, current } = require("./calculator.js")

test('Test Number', () => {
    let total = 0
    for (let i = 0; i < 100; i++) {
        let integer = Math.floor(Math.random() * 10)
        total = total * 10 + integer
        number(integer)
        expect(current).toEqual(total)
    }
})
const multiplo = require('./multiplo')

test('Verficando se é multiplo', ()=> {
    expect(multiplo(3, 6)).toBe('multiplo')
})

// const sum = require('./sum')

// test('soma dois a + b', ()=> {
//     expect(sum(1, "b")).toBe("1b")
// })
// const { TestWatcher } = require('jest')
const sum = require('./sum')

test('soma dois a + b', ()=> {
    expect(sum(1, "b")).toBe("1b")
})
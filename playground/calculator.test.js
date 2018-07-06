// console.log('Hello from calculator.test.js')
const expect = require('expect');
const {
    add,
    subtract,
    multiply,
    divide
} = require('../calculator');

// discuss about test
describe('Calculator function', () => {
    
    it('Should add number', () => {
        const answerAdd = add(1, 2);
        expect(answerAdd).toBe(3);
    });

    it('Should subtract number', () => {
        const answerSub = subtract(5, 3);
        expect(answerSub).toBe(2);
    })

    it('Should multiply number', () => {
        const answerMultiply = multiply(5, 10);
        expect(answerMultiply).toBe(50);
    })

    it('Should divide number', () => {
        const answerDivide = divide(40, 5);
        expect(answerDivide).toBe(8);
    })
});
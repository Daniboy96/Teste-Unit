const {soma, subtracao, multiplicacao, adicao} = require('./Calculadora.js')

test('validar soma', () => {
    expect(soma(5, 5)).toBe(10)

} )

test('validar subtração', () => {
    expect(subtracao(10, 5)).toBe(5)
})

test('validar multiplicação', () => {
    expect(multiplicacao(3, 4)).toBe(12)
})

test('validar adição', () => {
    expect(adicao(10, 2)).toBe(5)
})
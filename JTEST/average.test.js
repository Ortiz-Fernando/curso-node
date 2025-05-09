// importamos metodo
const { average } = require('../JTEST/utils/for_testing')
// creamos el grupo para luego poner los test
describe('average', () => {
  test('de un valor es el mismo valor', () => { // primer test
    expect(average([1])).toBe(1)
  })

  test('de muchos valores es calculado correctamente', () => { 
    // segundo test
    expect(average([1, 2, 3, 4, 5, 6])).toBe(3.5)
  })

  test('de array vacio es cero', () => {
    // tecer test
    expect(average([])).toBe(0)
  })
})

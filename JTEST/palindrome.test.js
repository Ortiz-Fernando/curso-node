// importamos metodo
const { palindrome } = require('../JTEST/utils/for_testing')
// creamos el test
test('palindrome de mio', () => { // callback
  const result = palindrome('mio')
  // esperamos que el resultado sea OIM
  expect(result).toBe('oim')
})

// creamos un segundo test unitario
test('palindrome de no string', () => { // callback
  const result = palindrome('')
  // esperamos que el resultado sea OIM
  expect(result).toBe('')
})

// creamos un tercer test unitario
test('palindrome del sin parametro', () => { // callback
  const result = palindrome()
  // esperamos que el resultado sea ''
  expect(result).toBeUndefined()
})

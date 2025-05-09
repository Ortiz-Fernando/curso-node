// creamos funcion que testearemos
const suma = (a, b) => {
  return a + b
}

// creamos otra funcion que testearemos
const checks = [
  { a: 0, b: 0, result: 0 },
  { a: 1, b: 3, result: 4 },
  { a: -3, b: 3, result: 0 }
]

// reconrreremos el array con forEach
checks.forEach(check => {
  const { a, b, result } = check

  console.assert(
    suma(a, b) === result,
    `suma de ${a} y ${b} deberia ser ${result}`
  )
})

// contar la cantidad de test pasado
console.log(`${checks.length} Checks performed.`)
/*
// probamos la funcion con unos valores
console.assert(
  suma(0, 0) === 0,
  'suma de 1 y 3 deberia ser 4'
)

// probamos con otros valores
console.assert(
  suma(1, 3) === 4,
  'suma de 1 y 3 deberia ser 4'
)
*/
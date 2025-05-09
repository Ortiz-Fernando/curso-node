// creamos una funcion que recibe un string, lo voltee, de vuelta y una
const palindrome = (string) => {
  if (typeof string === 'undefined') return // devolvera undefined
  return string
    .split('')
    .reverse()
    .join('')
}

// calcular la media
const average = array => {
  if (array.length === 0) return 0 // devolvera 0
  let sum = 0
  array.forEach(num => { sum += num })
  return sum / array.length
}

// exportamos como estamosen CommonJS
module.exports = {
  palindrome,
  average
}

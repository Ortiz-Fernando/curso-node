// importar modulos nativos FILE SYSTEM
const fs = require('node:fs')

// Sacar por pantalla lectura del primer archivo
console.log('Leyendo el primer archivo:')
// Usando el metodo de lectura asincrona de FS con un callBack
const text = fs.readFileSync('./archivo.txt', 'utf-8')
console.log('PRIMER TEXTO:', text) // texto del archivo con codificacion utf-8

console.log('--->  Hacer cosas mistras lee archivo')

// Sacar por pantalla lectura del segundo archivo ASINCRONO
console.log('Leyendo el segundo archivo:')
const secondText = fs.readFileSync('./archivo2.txt', 'utf-8')
console.log('SEGUNDO TEXTO:', secondText) // texto del archivo con codificacion utf-8

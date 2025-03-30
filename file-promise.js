//importar modulos nativos FILE SYSTEM
const fs = require('node:fs/promises')
const { text } = require('node:stream/consumers')

//Sacar por pantalla lectura del primer archivo
console.log('Leyendo el primer archivo:')
//Usando el metodo de lectura asincrona de FS con un callBack
fs.readFile('./archivo.txt', 'utf-8')
    .then (text => {
    console.log('PRIMER TEXTO:', text) //texto del archivo con codificacion utf-8
})


console.log('--->  Hacer cosas mienstras lee archivo')

//Sacar por pantalla lectura del segundo archivo ASINCRONO
console.log('Leyendo el segundo archivo:')
fs.readFile('./archivo2.txt', 'utf-8')
    .then (text => {
    console.log('SEGUNDO TEXTO:', text) //texto del archivo con codificacion utf-8
})
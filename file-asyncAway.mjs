//importar modulos nativos FILE SYSTEM
import {readFile} from 'node:fs/promises'


//Sacar por pantalla lectura del primer archivo
console.log('Leyendo el primer archivo:')
//introducir AsyncAway
const text = await readFile('./archivo.txt', 'utf-8')
console.log('PRIMER TEXTO:', text) //texto del archivo con codificacion utf-8



console.log('--->  Hacer cosas mienstras lee archivo')

//Sacar por pantalla lectura del segundo archivo ASINCRONO
const secondText = await readFile('./archivo2.txt', 'utf-8')
console.log('SEGUNDO TEXTO:', secondText) //texto del archivo con codificacion utf-8

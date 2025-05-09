//creamos constante del modulo y lo requerimos de FS/promises
const {readFile} = require ('node:fs/promises');//Indicar el ;

//IIFE - Inmediatly Involved Function Expression (FUNCION AUTOINVOCADA)
(
    async () => {
        //Sacar por pantalla lectura del primer archivo
console.log('Leyendo el primer archivo:')
//introducir AsyncAway
const text = await readFile('./archivo.txt', 'utf-8')
console.log('PRIMER TEXTO:', text) //texto del archivo con codificacion utf-8



console.log('--->  Hacer cosas mienstras lee archivo')

//Sacar por pantalla lectura del segundo archivo ASINCRONO
console.log('Leyendo el segundo archivo:')
const secondText = await readFile('./archivo2.txt', 'utf-8')
console.log('SEGUNDO TEXTO:', secondText) //texto del archivo con codificacion utf-8

    }
)()//Aqui se autoinvoca inmediatamente

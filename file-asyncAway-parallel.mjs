//importar modulos nativos FILE SYSTEM
import {readFile} from 'node:fs/promises'

//HAcemos el paralelo con las pomesas a crear
Promise.all([ //Todas las promesas
    readFile('./archivo.txt', 'utf-8'), //promesa 1
    readFile('./archivo2.txt', 'utf-8') //promesa 2
]).then(([text, secondText])=> { //al terminar cada promesa PARELELIZAR
    console.log('PRIMER TEXTO:', text), //accion asincrona 1
    console.log('SEGUNDO TEXTO:', secondText) //accion asincrona 2
})


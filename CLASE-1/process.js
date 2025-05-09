// argunmentos de entrada a la hora de ejecutar
console.log(process.argv) //saca por pantalla array con argumentos

//controlar el proceso y su salida 0-todo ok 1-salir por error
//process.exit(1)

//controlar eventos
process.on('exit',()=>{
    //colocar la funcion, por ejemplo para limpiar consola
})

//metodo Current Working Directory
console.log(process.cwd())

//platform tiene el metodo de variable de entorno donde puedo pasar parametro desde terminal
console.log(process.env.PEPITO)
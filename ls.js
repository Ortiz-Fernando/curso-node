const fs = require('node:fs')

//leer el directorio actual
fs.readdir('.', (err, files) => {
    if(err){ //manejamos el error
        console.error('Error al leer el directorio:  ', err)
        return;
    }
    //leemos cada fichero
    files.forEach(file => {
        console.log(file)
    })
})

//importar modulos nativos FILE SYSTEM
const fs = require('node:fs')

const stats = fs.statSync('./archivo.txt')

console.log(
    stats.isFile(),//booleano si es archivo
    stats.isDirectory(),//booleano si es directorio
    stats.isSymbolicLink(),//booleano si es enlace simbolico
    stats.size//tamaño en bytes
)
// importar modulos nativos
const os = require('node:os')

console.log('Información del sistema operativo:')
console.log('__________________________________')

console.log('SO', os.version())
console.log('Nombre:', os.platform())
console.log('Versión', os.release())
console.log('Arquitectura:', os.arch())
console.log('__________________________________')
console.log('CPUs', os.cpus())
console.log('Memoria total - GBs', os.totalmem() / 1024 / 1024 / 1024)
console.log('Memoria libre - GBs', os.freemem() / 1024 / 1024 / 1024)
console.log('__________________________________')
console.log('Dias encendidos', os.uptime() / 60 / 60 / 24)

const path = require('node:path')

//informar barra separadora de carpeta segun SO
console.log(path.sep)

//unir rutas con path
const filePath = path.join('content', 'subfolder', 'test.txt')
console.log(filePath)

//saber de una ruta el nombre del fichero
const base = path.basename('\content\subfolder\test.txt')
console.log(base)

//saber de una ruta el nombre del fichero
const filename = path.basename('content\subfolder\test.txt','.txt')
console.log(filename)

//saber una extension
const extension = path.extname('my.super.test.txt')
console.log(extension)
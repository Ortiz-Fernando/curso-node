const fs = require('node:fs/promises')//Sistema de modulos
const path = require('node:path')
//importamos libreria de estetica npm picocolors
const pc = require('picocolors')
//     ^^^     se crea en el proyecto una carpeta node_modules  
// para instalar la dependencia importadas

//creamos variable folder para permitir indicar sobre cual carpeta lista. PROCESS
const folder = process.argv[2] ?? '.'



//funcion asincrona
async function ls(folder) { 
    let files
    try{ //para trabajar el error de files
        //leer el directorio actual
        files = await fs.readdir(folder)
    } catch{
        console.error(pc.red('❌ Error al leer el directorio: ${folder}'))
        process.exit(1) //salir de forma contralada con error
    }
    //creamos la promesas de todos los archivos, lo mapeamos
    const filesPromises = files.map(async file => { //asincronia en parelelo
        //recuperamos la informacion de cada archivo con un stat
        const filePath = path.join(folder, file)
        let stats

        try{
            stats = await fs.stat(filePath)
        }catch{
            console.error('😫 No se puede leer el archivo ${filePath}')
            process.exit(1) //salir de forma contralada con error
        }

        //recuperar datsos
        //si es directorio
        const isDirectory =stats.isDirectory() 
        //asignar una forma de identificar
        const fileType = isDirectory ? 'd' : 'f' //d-directorio f-fichero
        //tamaño de archivo
        const fileSize = stats.size.toString()
        //cuando se modiifico
        const fileModified = stats.mtime.toLocaleString()   

        //listar en un return los parametros
        return `▶ ${pc.green(fileType.padEnd(2).padStart(2))} ${pc.blue(file.padEnd(22))} ${pc.bgMagentaBright(pc.bold(fileSize.padStart(10)))} ${pc.yellowBright(fileModified.padStart(20))}` 
    })

    //esperamos las promesas
    const filesInfo = await Promise.all(filesPromises)
    
    //para cada una de la informacion hacemos console.log
    filesInfo.forEach(fileInfo => console.log(fileInfo))
    }

    ls(folder)
// creacion de aplicacion para saber puerto disponible

// importamos modulo
const net = require('node:net')

// funcion donde pasamos puerto deseado con promesa
function findAvailablePort (desiredPort) {
// devolvemos promesa
  return new Promise((resolve, reject) => {
    // creamos un servidor
    const server = net.createServer()
    // escuchar en el puerto deseado
    server.listen(desiredPort, () => {
    // recuperamos el puerto si pudo escuchar
      const { port } = server.address()
      // cerramos el servidor
      server.close(() => {
        resolve(port)
      })
    })

    // podemos escuchar el evento error del servidor
    server.on('error', (err) => {
      // pasamos el codigo de error a la condicion EADDRINUSE
      if (err.code === 'EADDRINUSE') {
        // ejecutar la funcion si hay error de puerto EADDRINUSE
        findAvailablePort(0).then(port => resolve(port))
      } else {
        reject(err)
      }
    })
  })
}

module.exports = { findAvailablePort }

//  como hacer un servidor con node

// importar modulo nativo de node, HTTP
const http = require('node:http')
// exportamos aplicacion para encontrar puerto libre creada anteriormente
const { findAvailablePort } = require('./free-port.js')

// creamos servidor con el metodo createServer
const server = http.createServer(
  // añadimos callback para c/ ves que legue request respondamos
  (req, res) => {
    console.log('request received') // recibo peticion
    res.end('Hola mundo') // metodo de respuesta
  })

// solicitamos el 3000 sino el que me des 3000
findAvailablePort(3000).then(port => {
  server.listen(port, () => {
    console.log(`server listening on port http://localhost:${port}`)
  })
})

/*
// metodo para escuchar el servidor podemos usar 0 como puerto para tomar el primero libre
server.listen(0, () => { // añadimos callBack
  console.log(`server listening on port http://localhost:${server.address().port}`)
})
  */

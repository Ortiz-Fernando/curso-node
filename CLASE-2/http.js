// importamos un modulo http
const http = require('node:http')
const fs = require('node:fs') // modulo fs

// exportamos aplicacion para encontrar puerto libre creada anteriormente
const desiredPort = process.env.PORT ?? 1234

// funcion del servidor que procesa los pedidos
const processRequest = (req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8') // metodo de headers general a el condicional
  if (req.url === '/') {
    res.statusCode = 200 // OK metodo de estado peticion
    res.end('<h1 style="color: blue; font-family: Roboto, Arial, sans-serif">Bienvenido a mi página de inicio</h1>') // metodo de respuesta
  } else if (req.url === '/contacto') {
    res.statusCode = 200 // OK metodo de estado peticion
    res.end('<h1 style="font-family: Roboto, Arial, sans-serif">Contacto</h1>') // metodo de respuesta
  } else if (req.url === '/imagen1.png') {
    fs.readFile('./images.png', (err, data) => {
      if (err) {
        res.statusCode = 500 // Error
        res.end('<h1 style="color: green">500 Internal Server Error</h1>') // metodo de respuesta
      } else {
        res.setHeader('Content-Type', 'image/png')
        res.end(data) // parametro leido en fileRead que queda en buffer
      }
    })
  } else {
    res.statusCode = 404 // NOT FOUND metodo de estado peticion
    res.end('<h1 style="color: red; font-family: Roboto, Arial, sans-serif">404</h1>') // metodo de respuesta
  }
}

// creamos servidor con el metodo createServer
const server = http.createServer(processRequest)

server.listen(desiredPort, () => {
  console.log(`server listening on port http://localhost:${desiredPort}`)
})

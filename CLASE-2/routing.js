const http = require('node:http')

const dittoJSON = require('./pokemon/ditto.json')

const processRequest = (req, res) => {
  const { method, url } = req

  switch (method) {
    case 'GET' :
      switch (url) {
        case '/pokemon/ditto':
          res.setHeader('Content-Type', 'application/json; charset=utf-8')
          return res.end(JSON.stringify(dittoJSON))
        default:
          res.statusCode = 404
          res.setHeader('Content-Type', 'text/html; charset=utf-8')
          return res.end('<h1>Error 404</h1>')
      }
    case 'POST' :
      switch (url) {
        case '/pokemon':{
          let body = '' // let para que pueda usarlo mas abajo

          // escuchar el evento data. para la request reciba info para cada trozo (chunk)
          req.on('data', chunk => {
            body += chunk.toString()
          })

          req.on('end', () => {
            // tenemos los datos y opdemos parsear el body
            const data = JSON.parse(body)
            // podriamos llamar a una BD para guardar info

            // escribimos la cabecera
            res.writeHead(201, { 'Content-Type': 'aplication/json; charser=utf-8' })

            // agregamos una salida de fecha para ver que funciona
            data.timestamp = Date.now()
            res.end(JSON.stringify(data))
          })
          break
        }
        default:
          res.statusCode = 404
          res.setHeader('Content-Type', 'text/html; charset=utf-8')
          return res.end('<h1>Error 404</h1>')
      }
  }
}

const server = http.createServer(processRequest)

server.listen(1234, () => {
  console.log('server listening on port http://localhost:1234')
})

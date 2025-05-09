// importamos framework de express
const express = require('express')
// crear la app con express
const app = express()
const ditto = require('./pokemon/ditto.json')

// por seguridad podemos deshabilitar la cabecera donde señala el uso de express
app.disable('x-powered-by')

// creamos variable de entorno y valor por defecto
const PORT = process.PORT ?? 1234

// usaremos Middleware funcion que trata las requests
app.use((req, res, next) => { // todo se puede hacer con 'app.use(express.json)'
  // si el metodo de la req es distinto a POSt seguimos
    if (req.method !== 'POST') return next()
    // si la cabecera es distinta a contant-type json seguimos
    if (req.headers['content-type'] !== 'application/json') return next()
  
    let body = '' // let para que pueda usarlo mas abajo

  // escuchar el evento data. para la request reciba info para cada trozo (chunk)
  req.on('data', chunk => {
    body += chunk.toString()
  })

  req.on('end', () => {
    // tenemos los datos y opdemos parsear el body
    const data = JSON.parse(body)

    // agregamos una salida de fecha para ver que funciona
    data.timestamp = Date.now()
    // mutar la request y meter la info en el req.body
    req.body = data
    next()
  })
})


// definimos que hara la app cada vez que recibe GET
app.get('/pokemon/ditto', (req, res) => {
  res.json(ditto)
})

// definimos que hara en POST
app.post('/pokemon', (req, res) => {
    // aqui deberiamos guardar en BD ...
    res.status(201).json(req.body) // req.body tenemos lo que tratamos en el moddleware
  })

// ahora tratamos otros path no especificados
app.use((req, res) => {
  res.status(404).send('<h1>Error 404</h1>')
})
// definimos que vamos a escuchar
app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`)
})

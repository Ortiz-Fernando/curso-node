const express = require('express') // require->commonJS
const movies = require('./movies.json')
const crypto = require('node:crypto')
const z = require('zod')

const app = express()
app.disable('x-powered-by')
app.use(express.json()) //middleware

// recuperar todas las peliculas
app.get('/movies', (req, res) => {
  // porpiedad query de req
  const { genre } = req.query
  // condicional para filtrar genero
  if (genre) {
    const filteredMovies = movies.filter(
      movie => movie.genre.some(g => g.toLowerCase() === genre.toLowerCase())
    )
    return res.json(filteredMovies)
  }
  res.json(movies)
})

app.post('/movies', (req, res) => {
    const movieSchema = z.object({
    title: z.string({
        invalid_type_error: 'Movie title must be a string',
        required_error: 'Movie title is required.'
    }),
    year: z.number().int().min(1900).max(2024),
    director: z.string(),
    duration: z.number().int().positive(),
    poster: z.string().url({
        message: 'Poster must be a valid URL'
    }),
    genre: z.array(
        z.enum(['Action', 'Drama', 'Crime', 'Sci-Fi', 'Adventure', 'Romance', 'Biography']),
        {
            invalid_type_error: 'Movie genre must be a string',
            required_error: 'Movie genre is a enum.'
        }
    ),
    rate: z.number().min(0).max(10)
    })

    const {
        title,
        year,
        director,
        duration,
        poster,
        genre,
        rate
    } = req.body

  /* VAlidaciones manuales = ineficientes
    EJEMPLO
        if (!=title || !genre || !year || !director){
            return res.status(400).json({ message: 'Missing required fields'})
        }
    */

  // usaremos herramientas de validacion

    // guardamos los datos de la app en memoria
    const newMovie = {
        id: crypto.randomUUID(), // uuid v4
        title,
        year,
        director,
        duration,
        poster,
        genre,
        rate: rate ?? 0
    }

    movies.push(newMovie)

    res.status(201).json(newMovie)
})

// recuperar todas las peliculas
app.get('/movies/:id', (req, res) => { // path to regex
  const { id } = req.params
  // recuperamos la pelicula
  const movie = movies.find(movie => movie.id === id)
  // condicional y erro en caso de encontrar o no la movie por id
  if (movie) return res.json(movie)
  res.status(404).json({ message: 'Movie not found' })
})

const PORT = process.env.PORT ?? 1234

app.listen(PORT, () => {
  console.log(`server escuchando en puerto http://localhost:${PORT}`)
})

const z = require('zod')

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
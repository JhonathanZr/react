const API_KEY = '2cbf5e83'

export const searchMovies = async ({ search }) => {
    if (search === '') return
    try {
        const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)
        const json = await response.json()
        const movies = json.Search
        return movies?.map(movies => ({
            id: movies.imdbID,
            title: movies.Title,
            year: movies.Year,
            poster: movies.Poster
        }))

    } catch (error) {
        throw new Error('Throw search movies')
    }
}
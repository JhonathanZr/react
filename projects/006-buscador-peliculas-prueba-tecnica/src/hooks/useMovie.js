import withResponse from '../response/with-response.json';


export function useMovie () {
const movies = withResponse.Search

const mappedMovies = movies?.map(movies => ({
    id: movies.imdbID,
    title: movies.Title,
    year: movies.Year,
    poster: movies.Poster
}))
return { movies: mappedMovies }
}
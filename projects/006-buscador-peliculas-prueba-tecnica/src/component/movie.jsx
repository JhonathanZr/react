import noResponse from '../response/no-response.json';

const HasError = noResponse.Error

function ResultMovie ({movies}) {
return(
    <ul className='box-container'>
    {
        movies.map(movie =>(
        <li key={movie.id} className='contain-movie'>
            <h3 className='movie-title'>{movie.title}</h3>
            <img src={movie.poster} alt={movie.title}/>
            <p className='release'>{movie.year}</p>
        </li>
        ))
    }
    </ul>
)}

function NoMoviesResults () {
return (
    <p>{HasError}</p>
)
}


export function Movie ({movies}){
    const hasMovies = movies?.length > 0
    return( hasMovies 
    ? <ResultMovie
    movies={movies}/>
    : <NoMoviesResults/>)
}
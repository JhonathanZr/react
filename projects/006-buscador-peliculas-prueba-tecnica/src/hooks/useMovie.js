import withResponse from '../response/with-response.json';
import noResponse from '../response/no-response.json'
import { useState } from 'react';

export function useMovie ({search}) {
const [responseMovies, setResponseMovies] = useState([])

    const movies = responseMovies.Search
    const mappedMovies = movies?.map(movies => ({
        id: movies.imdbID,
        title: movies.Title,
        year: movies.Year,
        poster: movies.Poster
    }))

const getMovies = () =>{
    if(search){
        setResponseMovies(withResponse)
    }else{
        setResponseMovies(noResponse)
    }
}
return { movies: mappedMovies, getMovies }
}
import { searchMovies } from '../servicies/movies';
import { useState } from 'react';
import { useRef, useMemo } from 'react';

export function useMovie({ search, sort }) {
    const [movies, setMovies] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const previousSearch = useRef(search)

    const getMovies = useMemo(()=>{
        async () => {
            if(search === previousSearch.current) return
            try {
                previousSearch.current = search
                setLoading(true)
                setError(null)
                const newMovies = await searchMovies({ search })
                setMovies(newMovies)
            } catch (error) {
                setError(e.message)
            }finally{
                setLoading(false)
            }
    
        }
    },[search])

    const sortMovies = useMemo(() =>{
        return sort 
        ? [ ...movies].sort((a, b)=> a.title.localeCompare(b.title))
        : movies
    },[movies, sort]) 

    return { movies : sortMovies, getMovies, loading }
}
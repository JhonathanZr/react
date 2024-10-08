import { searchMovies } from '../servicies/movies';
import { useCallback, useState } from 'react';
import { useRef, useMemo } from 'react';

export function useMovie({ search, sort }) {
    const [movies, setMovies] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const previousSearch = useRef(search)

    const getMovies = useCallback( async ({search})=>{
        if(search === previousSearch.current) return
        try {
            console.log(search)
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
    }, [])

    const sortMovies = useMemo(() =>{
        return sort 
        ? [ ...movies].sort((a, b)=> a.title.localeCompare(b.title))
        : movies
    },[movies, sort]) 

    return { movies : sortMovies, getMovies, loading }
}
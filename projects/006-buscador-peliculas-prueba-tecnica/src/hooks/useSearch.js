import { useEffect, useState, useRef } from "react"

export function useSearch() {
    const [search, setSearch] = useState('')
    const [error, setError] = useState(null)
    const validFirstSearch = useRef(true)
    console.log(search)
    useEffect(() => {
        if(validFirstSearch.current){
            validFirstSearch.current = search === ''
            return
        }
        if (search === '') {
            setError('No has escrito nada aun')
            return
        }
        if (search.match(/^\d+$/)) {
            setError('No puedes buscar por números')
        }
        if (search.length < 3) {
            setError('Comenzar busqueda con al menos 3 letras')
        }
        if (search.length > 3) {
            setError(null)
            return
        }
    })
    return { search, setSearch, error }
}
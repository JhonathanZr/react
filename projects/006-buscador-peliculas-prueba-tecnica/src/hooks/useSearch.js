import { useEffect, useState } from "react"

export function useSearch() {
    const [search, setSearch] = useState('')
    const [error, setError] = useState(null)

    useEffect(() => {
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
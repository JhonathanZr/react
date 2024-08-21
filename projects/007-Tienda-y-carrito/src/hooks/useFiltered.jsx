import { useContext } from "react"
import { FilterContext } from "../context/FilterContext.jsx"

export function useFiltered  ({data}) {
    const {filters} = useContext(FilterContext)
    
    const filtered =  data.filter(product=>{
        return (
            (filters.category === 'all' || 
            product.category === filters.category) &&
            product.price >= filters.minPrice
        )
    })
return {filtered}
}


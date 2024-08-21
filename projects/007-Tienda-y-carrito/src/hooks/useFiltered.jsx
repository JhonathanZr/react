import { useEffect, useState } from "react"

export function useFiltered  ({data, filters}) {
    const filtered =  data.filter(product=>{
        return (
            (filters.category === 'all' || 
            product.category === filters.category) &&
            product.price >= filters.minPrice
        )
    })
return {filtered}
}


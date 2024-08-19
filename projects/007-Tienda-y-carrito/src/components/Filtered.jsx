import { useEffect } from "react";

export function Filtered ({data}) {
    const filterProducts = data.filter(product=>{
    return (
        (filters.category === 'all' || 
        product.category === filters.category) &&
        product.price >= filters.minPrice
    )
    
})
    return filterProducts
}


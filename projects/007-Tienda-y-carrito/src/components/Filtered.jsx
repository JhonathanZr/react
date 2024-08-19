export function filterProducts  ({data, filters}) {
return data.filter(product=>{
    return (
        (filters.category === 'all' || 
        product.category === filters.category) &&
        product.price >= filters.minPrice
    )
    
})
}


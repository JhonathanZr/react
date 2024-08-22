import { createContext, useState } from "react";

//1. Creas contexto // Este es el que se consume
export const FilterContext = createContext()

//2. Creas el Provider // Este proveerá
export function FilterProvider ({children}){
    const [filters, setFilters] = useState(
        {    category: 'all',
            minPrice: 0}
    )
    return (
    <FilterContext.Provider
    value={{    
        filters, 
        setFilters}}>
            {children}
        </FilterContext.Provider>
)
}
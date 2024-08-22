import { useContext } from "react"
import { FilterContext } from "../context/FilterContext.jsx"
import useGetProducts from "./useGetProducts.jsx"

export function useFiltered  () {
    const {data, isLoading} = useGetProducts()
    const {filters} = useContext(FilterContext)

    const filtered =  data?.filter(product=>{
        return (
            (filters.category === 'all' || 
            product.category === filters.category) &&
            product.price >= filters.minPrice
        )
    })
return {filtered, isLoading}
}
import { useState, useContext } from 'react'
import './filters.css'
import { FilterContext } from "../context/FilterContext.jsx"



export function Filter ({category, changeFilter}) {
    const {filters, setFilters} = useContext(FilterContext)

    const handleMinPrice = (event) =>{
        const newMinPrice = event.target.value
        setFilters(prevState => ({
            ...prevState,
            minPrice: newMinPrice
        }))
    }


    const handleCategory = (event) =>{
        setFilters(prevState =>({
            ...prevState,
            category: event.target.value
        }))
    }


    return(
        <section className="filters">
            <div>
                <label htmlFor="price">Price</label>
                <input
                type='range'
                id="price"
                min='0'
                max='500'
                value={filters.minPrice}
                onChange={handleMinPrice}/>
                <span>${filters.minPrice}</span>
            </div>
            
            <div>
                <label htmlFor="category">Category</label>
                <select onChange={handleCategory} id='category'>
                    <option value='all'>All</option>
                    {
                        category.map(category =>(
                            <option value={category} key={category}>{category}</option>
                        ))
                    }
                </select>
            </div>
        </section>
    )
}
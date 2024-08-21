import { useState } from 'react'
import './filters.css'
import debounce from "just-debounce-it";

export function Filter ({category, changeFilter}) {
    const [minPrice, setMinPrice] = useState(0)
    const [changeCategory, setChangeCategory] = useState('all')

    const handleMinPrice = (event) =>{
        const newMinPrice = event.target.value
        setMinPrice(newMinPrice)
        changeFilter(prevState => ({
            ...prevState,
            minPrice: newMinPrice
        }))
    }

    const handleCategory = (event) =>{
        setChangeCategory(event.target.value)
        changeFilter(prevState =>({
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
                onChange={handleMinPrice}/>
                <span>${minPrice}</span>
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
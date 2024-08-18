import { useEffect, useState } from 'react'
import './App.css'
import { ListProducts } from './components/products'
import { fetchProducts } from './services/getProducts'

function App() {
  const {data, setData} = fetchProducts()
  const [filters, setFilters] = useState({
    category : 'all',
    minPrice : 0,
  })

  const filterProducts = (data) =>{
    console.log(data)
    const newFilter = data.filter(product =>{
      return(
        product.price >= filters.minPrice &&
        (
          filters.category === 'all' ||
          product.category === filters.category
        )
      )}
    )
    return setData(newFilter)
  }

  return (
    <>
    <h1 className='title'>Tienda y carrito de compras</h1>
    <ListProducts
    data={filterProducts}
    />
    </>
  )
}

export default App

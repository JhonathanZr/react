import './App.css'
import { useEffect, useState } from 'react'
import { ListProducts } from './components/products'
import { fetchProducts } from './services/getProducts'
import { Header } from './components/header'

function App() {
  const [data, setData] = useState()
  const [category, setCategory] = useState()
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0,
  })

  useEffect(() => {
    const getProducts = async () => {
        const produtcs = await fetchProducts();
        const newProducts = produtcs.listProducts
        const newCategory = produtcs.category
        setCategory(newCategory)
        setData(newProducts)
    }
    getProducts();
  }, []);

  const filterProducts = () =>{
    return data.filter(product=>{
      return (
          (filters.category === 'all' || 
          product.category === filters.category) &&
          product.price >= filters.minPrice
      )
      
  })
  }


  return (
    <>
      {category && <Header category={category} changeFilter={setFilters}/>}
      {data && <ListProducts data={filterProducts()}/>}
    </>
  )
}

export default App

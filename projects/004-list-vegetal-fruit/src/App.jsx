import './App.css'
import { PRODUCTS } from './constant/products'
import { SearchBar } from './components/row'
import { ProductTable } from './components/row'
import { useState } from 'react'

function FilterTable({ products }) {
  const [stock, setStock] = useState(true)
    const handleClick = () => {
        !stock ? setStock(true) : setStock(false)
        console.log(stock)
    }
  return (
    <div>
      <SearchBar
      handleClick = {handleClick}/>
      <ProductTable
        products={products} 
        stock = {stock}/>
    </div>
  )
}

function App() {

  return (
    <>
      <FilterTable products={PRODUCTS} />
    </>
  )
}

export default App

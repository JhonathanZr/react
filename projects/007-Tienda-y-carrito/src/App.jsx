import './App.css'
import { useContext} from 'react'
import { CartProvider } from './context/Cart'
import { useFiltered } from './hooks/useFiltered'
import useGetProducts from './hooks/useGetProducts'
import { FilterContext } from './context/FilterContext'
import { ListProducts } from './components/products'
import { Header } from './components/header'
import { Cart } from './components/Cart'

function App() {
const {setFilters} = useContext(FilterContext)
const {category} = useGetProducts([])
const {filtered, isLoading} = useFiltered();


  return (
    <CartProvider>
    {isLoading ? <section></section> 
    : <Header category={category} changeFilter={setFilters}/>
      }
      <Cart/>
      {
        isLoading ? <p>Cargando...</p> 
        :<ListProducts data={filtered}/>
      }

    </CartProvider>
  )
}

export default App

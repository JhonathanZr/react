import './App.css'
import { useContext} from 'react'
import { ListProducts } from './components/products'
import { Header } from './components/header'
import { useFiltered } from './hooks/useFiltered'
import useGetProducts from './hooks/useGetProducts'
import { FilterContext } from './context/FilterContext'

function App() {
const {setFilters} = useContext(FilterContext)
const {category} = useGetProducts([])
const {filtered, isLoading} = useFiltered();


  return (
    <>
    {isLoading ? <section></section> 
    : <Header category={category} changeFilter={setFilters}/>
      }
      {
        isLoading ? <p>Cargando...</p> 
        :<ListProducts data={filtered}/>
      }

    </>
  )
}

export default App

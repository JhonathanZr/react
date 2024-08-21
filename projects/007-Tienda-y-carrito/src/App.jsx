import './App.css'
import { useEffect, useState } from 'react'
import { ListProducts } from './components/products'
import { useFetchProducts } from './services/useFetchProducts'
import { Header } from './components/header'
import { useFiltered } from './hooks/useFiltered'
import useGetProducts from './hooks/useGetProducts'

function App() {
  const [filters, setFilters] = useState(
    {    category: 'all',
        minPrice: 0}
)
const { data, category, isLoading } = useGetProducts([])
const {filtered} = data ? useFiltered({data, filters}) : [];


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

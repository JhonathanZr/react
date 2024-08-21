import './App.css'
import { useContext, useEffect, useState } from 'react'
import { ListProducts } from './components/products'
import { Header } from './components/header'
import { useFiltered } from './hooks/useFiltered'
import useGetProducts from './hooks/useGetProducts'
import { FilterContext } from './context/FilterContext'

function App() {
const { data, category, isLoading } = useGetProducts([])
const {filters, setFilters} = useContext(FilterContext)

const {filtered} = data ? useFiltered({data}) : [];



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

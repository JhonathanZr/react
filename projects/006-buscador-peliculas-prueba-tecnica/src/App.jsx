import './App.css'
import { useRef, useState, useEffect } from 'react';
import { useMovie } from './hooks/useMovie';
import { Movie } from './component/movie';
import { useSearch } from './hooks/useSearch';



function App() {
  const {movies} = useMovie()
  const inputRef = useRef()
  const {error, search, setSearch} = useSearch()

  const handleSubmit = (event) =>{
    event.preventDefault()
    const value = inputRef.current.value
    setSearch(value)
  }

  const handleChange = (event) => {
  const newSearch = event.target.value
  if(newSearch.startsWith(' '))return
  setSearch(newSearch)
  }


  return (
    <div className='page'>
    <header>
      <h1>Buscador de películas</h1>
      <form className='form' onSubmit={handleSubmit} >
        <input onChange={handleChange} value={search} 
        ref={inputRef} placeholder='Avengers, Star Wars, The Matrix...' />
        <button type='submit'>Buscar</button>
      </form>
      {error && <p style={{color: 'red', textAlign: 'center'}}>{error}</p>}
    </header>
    <main>
      <Movie
      movies={movies}/>
    </main>
    </div>
  )
}

export default App

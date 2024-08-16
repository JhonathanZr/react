import './App.css'
import { useState, useEffect } from 'react';
import { useMovie } from './hooks/useMovie';
import { Movie } from './component/movie';
import { useSearch } from './hooks/useSearch';



function App() {
  const [sort, setSort] = useState(false)
  const {error, search, setSearch} = useSearch()
  const {movies, getMovies, loading} = useMovie({search, sort})


  const handleSort = () =>{
    setSort(!sort)
    console.log(sort)
  }

  const handleSubmit = (event) =>{
    event.preventDefault()
    getMovies()
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
        placeholder='Avengers, Star Wars, The Matrix...' />
        <input type='checkbox' onChange={handleSort} checked={sort}></input>
        <button type='submit'>Buscar</button>
      </form>
      {error && <p style={{color: 'red', textAlign: 'center'}}>{error}</p>}
    </header>
    <main>
      {
      loading ? <p className='loading'>Cargando...</p>
      :<Movie
      movies={movies}/>
      }
    </main>
    </div>
  )
}

export default App

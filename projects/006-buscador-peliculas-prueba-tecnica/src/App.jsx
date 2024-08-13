import './App.css'
import { useMovie } from './hooks/useMovie';
import { Movie } from './component/movie';

function App() {
  const {movies: mappedMovies} = useMovie()
  
  return (
    <div className='page'>
    <header>
      <h1>Buscador de películas</h1>
      <form className='form'>
        <input placeholder='Avengers, Star Wars, The Matrix...' />
        <button type='submit'>Buscar</button>
      </form>
    </header>
    <main>
      <Movie
      movies={mappedMovies}/>
    </main>
    </div>
  )
}

export default App

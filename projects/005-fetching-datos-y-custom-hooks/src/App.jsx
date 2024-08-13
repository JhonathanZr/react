import './App.css'
import { useCatImage, useFactCat } from './hooks/useCatImage'

function App() {
  const { fact, refreshRandomFact} = useFactCat()
  const {imageURL} = useCatImage({fact})

  const handleClick = async () =>{
    refreshRandomFact()
  }
  return (
    <>
      <section>
        <h1>Kitten API</h1>
        <button onClick={handleClick}> Refresh </button>
        <span>
          {fact && <p>{fact}</p>}
        </span>
        {imageURL && <img src={`${imageURL}`}
          alt={`Image extracted using first three world for ${fact}`} />}
      </section>
    </>
  )
}

export default App

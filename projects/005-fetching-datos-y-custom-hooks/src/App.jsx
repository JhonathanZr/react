import './App.css'
import { useState, useEffect } from 'react'

const API_FACTS_CATS = `https://catfact.ninja/fact`
const API_PREFIX_CAT = `https://cataas.com`



function App() {
  const [fact, setFact] = useState()
  const [imageURL, setImageURL] = useState("")

  const getRandomFact = () => {
    fetch(API_FACTS_CATS)
    .then(res => res.json())
    .then(data => {
      const { fact } = data
      setFact(fact)
    })
  }

  useEffect(() => {getRandomFact()}, [])

  useEffect(() => {
    if (!fact) return
    const wordToPrint = fact.split(' ', 2).join(' ')

    fetch(`https://cataas.com/cat/says/${wordToPrint}?json=true`)
      .then(res => res.json())
      .then(response => {
        const { _id } = response
        const url = `${API_PREFIX_CAT}/cat/${_id}/says/${wordToPrint}?fontSize=70&fontColor=red&`
        setImageURL(url)
      })
  }, [fact])

  const handleClick = () =>{
    getRandomFact()
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

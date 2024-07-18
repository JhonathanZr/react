import './App.css'
import { useState, useEffect } from 'react'

const API_FACTS_CATS = `https://catfact.ninja/fact`
const API_PREFIX_CAT = `https://cataas.com`



function App() {
  const [fact, setFact] = useState()
  const [imageURL, setImageURL] = useState("")
  useEffect(() => {
    fetch(API_FACTS_CATS)
      .then(res => res.json())
      .then(data => {
        const { fact } = data
        setFact(fact)
      })
  }, [])

  useEffect(() => {
    if (!fact) return

    const threeFirstWord = fact.split(' ', 3).join(' ')
    console.log(threeFirstWord)

    fetch(`https://cataas.com/cat/says/${threeFirstWord}?size=50&color=red&json=true`)
      .then(res => res.json())
      .then(response => {
        const { _id } = response
        const url = `${API_PREFIX_CAT}/cat/${_id}/says/${threeFirstWord}`
        setImageURL(url)
      })
  }, [fact])

  return (
    <>
      <section>
        <h1>API de gatitos</h1>
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

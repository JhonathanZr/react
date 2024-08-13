import { useEffect, useState } from "react"
import { getRandomFact } from '../services/facts'

const API_PREFIX_CAT = `https://cataas.com`

export function useCatImage ({fact}) {
const [imageURL, setImageURL] = useState("")
useEffect(() => {
    if (!fact) return
    const wordToPrint = fact.split(' ', 2).join(' ')
    fetch(`https://cataas.com/cat/says/${wordToPrint}?json=true`)
    .then(res => res.json())
    .then(response => {
        const { _id } = response
        const url = `${API_PREFIX_CAT}/cat/${_id}/says/${wordToPrint}?fontSize=60&fontColor=red&`
        setImageURL(url)
    })
}, [fact])
return {imageURL}
}

export function useFactCat  ()  {
const [fact, setFact] = useState()

const refreshRandomFact = () =>{
    getRandomFact().then(newFact => setFact(newFact))
}
useEffect((refreshRandomFact),[])

return {fact, refreshRandomFact}
}
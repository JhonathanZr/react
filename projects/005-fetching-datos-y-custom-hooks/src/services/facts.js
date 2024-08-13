const API_FACTS_CATS = `https://catfact.ninja/fact`

export   const getRandomFact = () => {
return fetch(API_FACTS_CATS)
.then(res => res.json())
.then(data => {
    const { fact } = data
    return fact
})
}
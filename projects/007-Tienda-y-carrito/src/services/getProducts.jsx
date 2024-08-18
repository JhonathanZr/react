import { useState, useEffect } from "react"

const URL_PRODUCTS = 'https://api.escuelajs.co/api/v1/products?offset=1&limit=20'

export  function fetchProducts () {
    const [data, setData] = useState(null)
    useEffect(()=>{
        console.log("hola")
            fetch(URL_PRODUCTS)
                .then(res => res.json())
                .then(data =>                     
                    setData(data?.map(products=>({
                        id: products.id,
                        price: products.price,
                        name: products.title,
                        image: products.images[0],
                        category: products.category.name,
                        description: products.description
                    }))))
    },[])    
    return {data, setData}
}
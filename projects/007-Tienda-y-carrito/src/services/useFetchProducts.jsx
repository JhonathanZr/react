const URL_PRODUCTS = 'https://api.escuelajs.co/api/v1/products'

export const useFetchProducts = async () => {
        try {
            const response = await fetch(URL_PRODUCTS)
            const dataJSON = await response.json()
            const produtcs = dataJSON
            const listProducts = produtcs?.map(product => ({
                id: product.id,
                price: product.price,
                name: product.title,
                image: product.images[0],
                category: product.category.name,
                description: product.description,
            }));
            const category = [...new Set(listProducts.map(producto => 
                producto.category))];

            return {listProducts, category}
        } catch (error) {
            return console.log('error')
        }
}
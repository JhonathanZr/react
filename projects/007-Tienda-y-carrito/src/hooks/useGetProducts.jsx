import { useState, useEffect } from 'react';
import { useFetchProducts } from '../services/useFetchProducts';

function useGetProducts() {
    const [data, setData] = useState();
    const [category, setCategory] = useState('');
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const getProducts = async () => {
            setIsLoading(true)
            const products = await useFetchProducts();
            setData(products.listProducts);
            setCategory(products.category);
            setIsLoading(false)
        };
        getProducts();
    }, []);

    return { data, category, isLoading };
}

export default useGetProducts;
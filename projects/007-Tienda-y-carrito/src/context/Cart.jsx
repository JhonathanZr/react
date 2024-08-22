import { createContext, useState } from "react";

export const CartContext = createContext()

export function CartProvider ({children}) {
    const [cart, setCart] = useState([])


    const addToCart = product =>{
        const productInCartIndex = cart.findIndex(item => item.id === product.id)
        if(productInCartIndex >= 0){
            const newCart = structuredClone(cart)
            newCart[productInCartIndex].quantity+=1
            return setCart(newCart)
        }
        setCart(prevState =>([
            ...prevState,
            {
            ...product,
            quantity: 1
            }
        ]))
    }
    const clearCart = () =>{
        setCart([])
    }

    const removeFromCart = product =>{
        setCart(prevState => prevState.filter(item => item.id !== product.id))
    }
    
    const subtractionFromCart = product =>{
        const checkSubtraction = cart.findIndex(item => item.id === product.id)
        const newCart = structuredClone(cart)
        if(product.quantity > 1){
            newCart[checkSubtraction].quantity= product.quantity -1
            return setCart(newCart)
        }else if(product.quantity <= 1){
            if(checkSubtraction === 0){
                newCart.shift()
                return setCart(newCart)
            }
            newCart.splice(checkSubtraction, checkSubtraction)
            return setCart(newCart)
        }
    }
    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            clearCart,
            removeFromCart,
            subtractionFromCart
        }}>
            {children}
        </CartContext.Provider>
    )
}
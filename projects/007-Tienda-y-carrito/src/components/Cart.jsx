import { useId } from 'react'
import './Cart.css'
import { ClearCartIcon, RemoveFromCartIcon, CartIcon } from './icons'
import { useCart } from '../hooks/useCart'

export function Cart() {
    const cardCheckBoxID = useId()
    const { cart, addToCart, subtractionFromCart, clearCart } = useCart()
    return (
        <>
            <label className='cart-button' htmlFor={cardCheckBoxID}>
                <CartIcon />
            </label>
            <input id={cardCheckBoxID} type='checkbox' hidden />
            <aside className='cart'>
                <button onClick={() =>{clearCart()}}><ClearCartIcon/></button>
                <ul>
                    {
                        cart.map(product => {
                            return (
                                <li key={product.id}>
                                    <img src={product.image}/>
                                    <div>
                                        <strong>{product.name}</strong> {product.price}
                                    </div>
                                    <footer>
                                        <small>
                                            {product.quantity}
                                        </small>
                                        <button onClick={() =>{addToCart(product)}}>+</button>
                                        <button onClick={() =>{subtractionFromCart(product)}}>-</button>
                                    </footer>
                                </li>
                            )
                        })
                    }
                </ul>
            </aside>
        </>
    )
}
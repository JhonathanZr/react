import {AddToCartIcon, RemoveFromCartIcon} from './icons'
import { useCart } from '../hooks/useCart'

export function ListProducts ({data}) {
    const {addToCart, cart, removeFromCart} = useCart()
    const checkProductInCart = data => {
        return cart.some(item => item.id === data.id)
    }
    return(
        <main>
            <ul>
                {
                    data?.map(data=>{
                        const isProductInCart = checkProductInCart(data)
                        return(
                            <li className='contain-products' key={data.id}>
                            <img className='img-products' src={data.image}
                            alt={data.description}/>
                            <div>
                            <h3>{data.name}</h3>
                            </div>
                            <div>
                            <p>{data.price}$</p>
                            </div>
                            <div>
                                <button 
                                className={isProductInCart ? 'remove' : 'add'}
                                onClick={() => isProductInCart 
                                ? removeFromCart(data)
                                : addToCart(data)}>
                                    {isProductInCart
                                    ?   <RemoveFromCartIcon/>
                                    :   <AddToCartIcon/>}
                                    </button>
                            </div>
                        </li>
                        )

                    })
                }
            </ul>
        </main>
    )
}
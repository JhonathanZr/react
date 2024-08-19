import {AddToCartIcon} from './icons'

export function ListProducts ({data}) {
    
    return(
        <main>
            <ul>
                {
                    data?.map(data=>(
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
                                <button><AddToCartIcon/></button>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </main>
    )
}
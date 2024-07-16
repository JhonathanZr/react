export function ProductRow({ product }) {
    return (
        <tr className={product.stocked ? 'is-stocked' : 'no-stocked'}>
            <td>{product.name}</td>
            <td>{product.price}</td>
        </tr>
    )
}

export function CategoryProductsRow({ category }) {
    return (
        <tr>
            <th className='colSpan2'>
                {category}
            </th>
        </tr>
    )
}

export function SearchBar({handleClick}) {
    
    return (
        <form>
            <input type="text" placeholder='Buscar...' />
            <label>
                <input type='checkbox' onClick={handleClick}/>
                {" "}
                Mostrar solo productos en stock
            </label>
        </form>
    )
}
function Order(a, b) {
    if (a.category < b.category) return -1;
    if (a.category > b.category) return 1;
}

export function ProductTable({ products, stock }) {
    const row = []
    let lastCategory = []
    products.sort(Order)
        products.forEach(product => {
        if (!lastCategory.find((element) => element === product.category)) {
            lastCategory.push(product.category)
            row.push(
                <CategoryProductsRow
                    category={product.category}
                    key={product.category} />
            )
        }
        if(!stock && product.stocked === false){
            return
        }else{
            row.push(<ProductRow
                product={product}
                key={product.name} />)
        }

    }
);
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {row}
            </tbody>
        </table>
    )
}
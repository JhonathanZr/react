import './App.css'

const PRODUCTS = [
  { category: "Frutas", price: "$1", stocked: true, name: "Manzana" },
  { category: "Frutas", price: "$1", stocked: true, name: "Fruta del dragón" },
  { category: "Verduras", price: "$4", stocked: false, name: "Calabaza" },
  { category: "Verduras", price: "$1", stocked: true, name: "Guisantes" },
  { category: "Frutas", price: "$2", stocked: false, name: "Maracuyá" },
  { category: "Verduras", price: "$2", stocked: true, name: "Espinaca" }
]

function CategoryProductsRow ({category}){
  return(
    <tr>
      <th className='colSpan2'>
        {category}
      </th>
    </tr>
  )
}

function ProductRow ({product}) {
  return(
  <tr className={product.stocked ? 'is-stocked' : 'no-stocked'}>
      <td>{product.name}</td>
      <td>{product.price}</td>
  </tr>
  )
}


function SearchBar () {
  return (
    <form>
      <input type="text" placeholder='Buscar...'/>
      <label>
        <input type='checkbox'/>
        {" "}
        Mostrar solo productos en stock
      </label>
    </form>
  )
}


function Order (a, b){
  if (a.category < b.category) return -1;
  if (a.category > b.category) return 1;
}

function ProductTable ({products}) {
  const row = []
  let lastCategory = []
  products.sort(Order)


  products.forEach(product => {
    if(!lastCategory.find((element) => element === product.category)){
      lastCategory.push(product.category)
      row.push(
      <CategoryProductsRow
      category={product.category}
      key={product.category}/>
      )
    }
    row.push(<ProductRow
      product={product}
      key = {product.name}/>)
  });




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

function FilterTable ({products}){
  return(
    <div>
      <SearchBar/>
      <ProductTable
      products={products}/>
    </div>
  )
}

function App() {

  return (
    <>
      <FilterTable products={PRODUCTS}/>
    </>
  )
}

export default App

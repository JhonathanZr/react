import { useState } from 'react'
import './App.css'

const PRODUCTS = [
  { category: "Frutas", price: "$1", stocked: true, name: "Manzana" },
  { category: "Frutas", price: "$1", stocked: true, name: "Fruta del dragón" },
  { category: "Frutas", price: "$2", stocked: false, name: "Maracuyá" },
  { category: "Verduras", price: "$2", stocked: true, name: "Espinaca" },
  { category: "Verduras", price: "$4", stocked: false, name: "Calabaza" },
  { category: "Verduras", price: "$1", stocked: true, name: "Guisantes" }
]
const SearchBar = ()=>{
  return (
    <span>
      <input placeholder='buscar'></input>
      <input type='checkbox'/>
      <p>Mostrar productos existentes</p>
  </span>
  )
}

const SelectFruit = () =>{
  let listFruits = []
    for (const fruits of PRODUCTS) {
      if(fruits.category === "Frutas"){
        listFruits.push(        
        <tr key={fruits.name}>
          <td>{fruits.name}</td>
          <td>{fruits.price}</td>
        </tr>)
        }
    }
    return (listFruits)
}

const SelectVegetal = ()=>{
  let listVegetal = []
  for(const vegetals of PRODUCTS){
    if(vegetals.category === "Verduras"){
      listVegetal.push(
        <tr key={vegetals.name}>
          <td>{vegetals.name}</td>
          <td>{vegetals.price}</td>
        </tr>
      )
    }
  } return(listVegetal)
}

const Tablet = () =>{
  return(
    <thead>
      <tr>
        <th>Name</th>
        <th>Price</th>
      </tr>

      <tr>
        <th>Fruits</th>
      </tr>
        <SelectFruit/>
      <tr>
        <th>Vegetal</th>
      </tr>
      <SelectVegetal/>
    </thead>
  )
}


function App() {

  return (
    <>
      <div className='filter-tablet'>
          <SearchBar/>
          <table>
            <Tablet/>
          </table>
      </div>
    

    </>
  )
}

export default App

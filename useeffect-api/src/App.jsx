import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Products from './Products'
import Posts from './Posts'

function App() {

  let [showProduct,setShowProduct]=useState(true);

  function changeProductState(){
    setShowProduct(!showProduct);
  }
  return (
  <div className='main'>
  <h1>All Products</h1>

  {/* <button onClick={changeProductState}>Show Product</button>
  <button onClick={changeProductState}>Hide Product</button> */}

  {/* {
    showProduct?
    (<Products/>):
    (<h1>Product Not Available</h1>)
  } */}

    {
    showProduct?
    (<Products/>):
    (<h1>Products Not Available</h1>)
  }
  </div>
  )
}

export default App

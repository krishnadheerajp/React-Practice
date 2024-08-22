import { useState } from 'react'
import './App.css'
import CompState from './CompState'
import About from './components/About'
import Product from './components/Product'
import Service from './components/Service'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Header from './components/Header'
import Image from './components/about/Image'
import Prices from './components/about/Prices'
import Location from './components/about/Location'
import RefDemo from './components/RefDemo'

function App() {

  // let [details,setDetails]=useState({
  //   name: "",
  //   email: ""
  // });

  // // To pass a variable as a property for objects we use []

  // function handleInput(){
  //     setDetails((prevObj)=>{;
  //     return {...prevObj,[event.target.name]:event.target.value}
  //   })

  // }

  // function handleSubmit(){
  //   console.log(details);
  // }

  return (
    <>
      {/* <div className="data-form">
   <input type="text" name='name' onChange={handleInput} placeholder='Enter Name' value={details.name}/>
   <input type="text" name='email' onChange={handleInput} placeholder='Enter Email' value={details.email}/>
   <button onClick={handleSubmit}>Submit</button>
   </div> */}

    <RefDemo></RefDemo>

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />}>
            <Route path='image' element={<Image />} />
            <Route path='prices' element={<Prices />} />
            <Route path='location' element={<Location />} />
          </Route>
          <Route path='/product' element={<Product />} />
          <Route path='/service' element={<Service />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App

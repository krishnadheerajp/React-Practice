import { useState, createContext } from 'react'
import './App.css'
import Product from './Product';
import Demo from './Demo';

export const TheContext = createContext();

function App() {

  const [username,setUsername]=useState("PKD");
  const [token,setToken]=useState("sa123");

  return (
    <TheContext.Provider value={{username,token,setUsername}}>
    <h1>App component {username}</h1>
    <Product  />
    <Demo name="Ironman" />
    </TheContext.Provider>
  )
}

export default App

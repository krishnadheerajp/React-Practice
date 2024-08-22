import './App.css'
import Product from './Product';
import User from './User';
import Practice  from './Practice';
import Country from './Country';
import { useState } from 'react';
import Fruit from './Fruit';

function App() {

  let [countries,setCountries]=useState(
    [
      {name: "India", capital: "New Delhi", pop: "1.4B"},
      {name: "Australia", capital: "Canberra", pop: "330M"},
      {name: "France", capital: "Paris", pop: "67.5M"}
    ]
  );

  let [isLoggedIn,setIsLoggedIn]=useState(false);

  function loadNewCountries(){
    setCountries(
      [
        {name: "US", capital: "Washington DC", pop: "1.4B"},
        {name: "Sri Lanka", capital: "Colombo", pop: "330M"},
        {name: "UAE", capital: "Dubai", pop: "67.5M"}
      ]
    );
  }

  function loadNewCountries2(){
    console.log(countries);
    setCountries(countries => [...countries,{name: "US", capital: "Washington DC", pop: "1.4B"}])
    console.log(countries);
  }

  function changeLogin(){
    setIsLoggedIn(!isLoggedIn);
  }

  let [fruits,setFruits]=useState(
    [
      {name: "Apple", color: "Red", place: "Kashmir"},
      {name:"Banana", color: "Yellow", place: "Kerala"},
      {name:"Mango", color:"Golden", place:"AP"}
    ]
  );

  function changeFruits(){
    setFruits(
      [
        {name: "Apple 2", color: "Red 1", place: "Kashmir 0"},
        {name:"Banana 2", color: "Yellow 1", place: "Kerala 0"},
      ]
    )
  }

  function addFruit(){
    setFruits(
      [...fruits,{name:"Kiwi", color:"Green", place:"Australia"}]
    )
  }

  return (
    <div>
      <h1>Main Component</h1>
      {/* <button onClick={changeLogin}>Login</button>
      {
        isLoggedIn==false?
        (<h1>Please Login</h1>):
          countries.map((country)=>{
            return (
            <Country name={country.name} capital={country.capital} pop={country.pop}/>
          )
          })
      } */}


      <Product name="iPhone 14" price="10000" specs={{ ram: "2gb", size: "19cm" }} category={["electronics", "mobile"]} />
      <Product name="POCO M4 Pro" price="300" specs={{ ram: "4gb", size: "15cm" }}  category={["electronics 1", "mobile 1"]}  />
      {/* <User name="PKD" age={25}/> */}
      {/* <Practice tempval={40} name="Dheeraj" age={22} jobdesc={{"role":"swe2", "doj": "06/07/24"}} skills={["aem developer","web developer"]} /> */}


      {/* <Country name={countries[0].name} capital={countries[0].capital} pop={countries[0].pop}/> */}

      {/* <button onClick={loadNewCountries}>Load New Countries</button>*/}

      {
        countries.map((country)=>{
          return (
          <Country name={country.name} capital={country.capital} pop={country.pop}/>
        )
        })
      } 
{/* 
      <div className="fruits-container">
      {
        fruits.map((fruit)=>{
          return (
            <Fruit name={fruit.name} place={fruit.place} color={fruit.color}></Fruit>
          )
        })
      }
      </div>
      <button onClick={changeLogin}>
        {
          isLoggedIn==true?
          ("Logout"):
          ("Login")
        }
      </button>
      {
        isLoggedIn==true?
         (<><button onClick={changeFruits}>Change Fruits</button><button onClick={addFruit}>Add Fruit</button></>):
        "Nothing to see"
      } */}

    </div>
  )
}

export default App;

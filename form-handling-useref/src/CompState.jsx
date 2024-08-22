import { useState } from 'react'
function CompState(){

  let [name,setName]=useState("Dheeraj");

  let [animals,setAnimals]=useState(["Lion","Tiger","Monkey"]);

  function addAnimal(){
    setAnimals((animals)=>{
      return [...animals,"Deer"];
    })
  }

  function changeName(){
   setName((val)=>{
      console.log(val);
      return "PKD";
   });
  }
  return(
    <div>
        <h1>{name}</h1>
{
  animals.map((animal,index)=>{
    return(
      <h1 key={index}>{animal}</h1>
    )
  })
}


<button onClick={changeName}>Change Name</button>

<button onClick={addAnimal}>Add New Animal</button>
    </div>
  )
}
export default CompState;
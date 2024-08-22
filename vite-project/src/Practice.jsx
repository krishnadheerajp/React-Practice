import { useState } from "react";

function Practice(props){
    let {name,age,jobdesc,skills}=props;

    let [val,setValue]=useState(10);

    function changeVal(){
        setValue(props.tempval);
    }

    function sayMyName(temp){
        console.log(temp);
    }


    return(
        <div>
          <h3>I am a component for practice</h3>
          <div>
          <h4>My name is {name} and my age is {age}</h4>
          <h4>I am working as a {jobdesc.role} from {jobdesc.doj}</h4>
          <h4>I can work as an {skills[0]} and {skills[1]}</h4>
          </div>

          <div>
            <h1>Value is {val}</h1>
            <button onClick={changeVal}>Change Values</button>
            {/* <button onClick={sayMyName.bind(this,"hola 2")}>Say My Name</button> */}
            <button onClick={()=>{
                sayMyName("hola 2");
            }}>Say My Name</button>
          </div>
        </div>
    )
}

export default Practice;
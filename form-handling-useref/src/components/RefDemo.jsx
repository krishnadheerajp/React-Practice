import { useEffect, useRef, useState } from "react";

function RefDemo(){

    let [name,setName]=useState("PKD");
    let nVar=0;
    let rVar=useRef(10);

    let pTag=useRef();

    useEffect(()=>{
        // console.log(name);
        console.log(nVar);
        console.log(rVar);
        // console.log(pTag);
    })

        return(
           <div className="refdemo">
             <h1>Use Ref Demo</h1>
             <h1>{name}</h1>
                <h1>{rVar.current}</h1>
                <h1>{nVar}</h1>
             <button onClick={()=>{
                setName("Dheeraj");
                nVar=1;
                rVar.current=20;
                }}>Change Name</button>

                <p ref={pTag}>Hello Everyone</p>

                <button onClick={()=>{
                    pTag.current.style.backgroundColor="red";
                }}>Change Content</button>
           </div>
        )
}
export default RefDemo;
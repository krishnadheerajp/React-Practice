import { TheContext } from "./App";
import { useContext } from "react";

function Category(){

    let u=useContext(TheContext);

    return(
        <div className="category">
            Category component {u.username} {u.token}

            <button onClick={()=>{
                u.setUsername("Dheeraj");
            }}>Change Name</button>
        </div>
    )
}
export default Category;
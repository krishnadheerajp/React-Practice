function Fruit(props){
    return(
         <div className="fruit">
            <h1>{props.name}</h1>
            <h2>{props.color}</h2>
            <h3>From: {props.place}</h3>
        </div>
    )
    
}
export default Fruit;
import { useEffect, useState } from "react";

function Products() {

    let [products, setProducts] = useState([]);

    // let [name,setName]=useState("iPhone 14");
    // let [price,setPrice]=useState(80000);

    // 1. By default useEffect is called for every render and re-render
    // 2. If we pass second parameter as a blank array it will only be called for first render
    // 3. If we pass variables in dependency array, useEffect will still be called for first render
    // It will also be called if the value of the variable in the dependency array changes
    // 4. We can have multiple useEffects in a single component
    // useEffect(()=>{
    //     console.log("Component mounted");

    //     //  When component unmounts
    //     return()=>{
    //         console.log("Component gone")
    //     }
    // },[price])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setProducts(data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    return (
        <div className="products">
            {
                products.map((product) => {
                    return (
                        <div className="product" key={product.id}>
                            <div className="image-wrapper">
                                <img className="p-image" src={product.image} />
                            </div>
                            <h3 className="p-title">{product.title}</h3>
                            <h4>$ {product.price}</h4>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Products;
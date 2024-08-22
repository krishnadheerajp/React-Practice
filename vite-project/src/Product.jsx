import PropTypes from 'prop-types'; 

function Product(props){
    let {name,price,specs,category}=props;
    return(
        <div className="product">
            <h2>{name}</h2>
            <h3>{price}</h3>
            <h4>{specs.ram}</h4>
            <h4>{category[0]}</h4>
        </div>
    )
}
export default Product;
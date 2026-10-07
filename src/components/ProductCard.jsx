import { Link } from "react-router-dom"
import { useAddCart } from "../contexts/AddCartContext";

export default function ProductCard({prod}){

        const { addToCart, cartItems } = useAddCart();
    
        const productInCart = cartItems.find((item) => item.id === prod.id)
        const CartLabel = productInCart ? `(${productInCart.quantity})` : "";
    
    
    return(
    <div className="card" >
                    
    <img alt={prod.name} src={prod.image}></img>
   
    <div className="content">
        <h3>{prod.name}</h3>
        <p className="price">{prod.price}</p>
        {/* <p>{prod.description}</p> */}
        <div className="buttons">
           
            <Link className="view" to={`/product/${prod.id}`} >View Details</Link>
            <button className="cart" onClick={() => addToCart(prod.id)}>Add to Cart {CartLabel}</button>
        </div>
    </div>
</div>
)
}
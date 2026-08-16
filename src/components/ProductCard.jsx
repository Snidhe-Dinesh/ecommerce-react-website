import { Link } from "react-router-dom"

export default function ProductCard({prod}){
    return(
    <div className="card" >
                    
    <img alt={prod.name} src={prod.image}></img>
   
    <div className="content">
        <h3>{prod.name}</h3>
        <p className="price">{prod.price}</p>
        {/* <p>{prod.description}</p> */}
        <div className="buttons">
           
            <Link className="view" to={`/product/${prod.id}`} >View Details</Link>
            <button className="cart">Add to Cart</button>
        </div>
    </div>
</div>
)
}
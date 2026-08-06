export default function ProductCard({prod}){
    return(
    <div className="card" >
                    
    <img src={prod.image}></img>
   
    <div className="content">
        <h3>{prod.name}</h3>
        <p className="price">{prod.price}</p>
        {/* <p>{prod.description}</p> */}
        <div className="buttons">
            <button className="view">View Details</button>
            <button className="cart">Add to Cart</button>
        </div>
    </div>
</div>
)
}
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { getProductById } from "../data/products";

export default function Product(){
    const {id}=useParams();
    const[product,setProduct]=useState(null);
    const navigate=useNavigate()

    useEffect(()=>{
        const foundProduct =getProductById(id)

        if(!foundProduct){
            navigate("/");
            return;

        }
        setProduct(foundProduct)
    },[id])
    if (!product) {
        return <p>Loading...</p>;
    }

    return (
        <div className="outer">
        <div className="product-single" >

                  <div className="product-image">
        <img alt={product.name} src={product.image}></img></div> 
       
        <div className="product-details">
            <h2>{product.name}</h2>
            <h3>{product.price}</h3>
            <p>{product.description}</p>
           
                <button>Add to Cart</button>
          
        </div>
    </div>
    </div>
    )
}
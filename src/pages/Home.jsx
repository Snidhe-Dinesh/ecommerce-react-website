import ProductCard from "../components/ProductCard";
import getProduct from "../data/products"

export default function Home() {
    const Products=getProduct();
    return <div>
        <div className="container">
        <h2>Welcome to ShopHub</h2>
        <p>Discover your favorite product here</p>

            <h2>Our Products</h2>
            <div className="products">
                {Products.map((prod)=> (
               <ProductCard prod={prod} key={prod.id} />
            ))}
              
            </div>
        </div>
    </div>
}
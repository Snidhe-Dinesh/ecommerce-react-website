import { useNavigate } from "react-router-dom";
import { useAddCart } from "../contexts/AddCartContext"
import { useAuth } from "../contexts/AuthContext";

export default function Checkout() {
    const navigate = useNavigate()
    const { user } = useAuth()


    const { getCartItemWithProduct, updateQuantity, removeItem, getProductTotal, clearCart } = useAddCart()
    const cartItems = getCartItemWithProduct()
    const total = getProductTotal();
    function placeorder() {
        if (!user) {
            alert("please log in");
            navigate("/auth");
        }
        else {
            alert("order successfuly placed")
            clearCart();
        }

    }
    return (
        <>
            <div className="checkout-container">

                <h2>Checkout</h2>
                {cartItems.length>0?(


                <div className="checkout">


                    <div className="order-summary">


                        <h3>Order Summary</h3>


                        {cartItems.map((item) =>
                            <div className="product" key={item.id}>

                                <img src={item.product.image}
                                    alt="Wireless Headphones" />

                                <div className="product-info">
                                    <h4>{item.product.name}</h4>
                                    <p>${item.product.price} each</p>
                                </div>

                                <div className="product-actions">
                                    <div className="quantity">
                                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                                    </div>

                                    <strong>${(item.product.price * item.quantity).toFixed(2)}</strong>

                                    <button onClick={() => removeItem(item.id)} className="remove">Remove</button>
                                </div>

                            </div>
                        )}






                    </div>




                    <div className="total-box">

                        <h3>Total</h3>

                        <div className="price-row">
                            <span>Subtotal:</span>
                            <strong>${total.toFixed(2)}</strong>
                        </div>

                        <div className="price-row total">
                            <span>Total:</span>
                            <strong>${total.toFixed(2)}</strong>
                        </div>

                        <button onClick={placeorder} className="place-order">
                            Place Order
                        </button>

                    </div>

                </div>
                ):
                (<p>No item yet</p>)}
            </div>


        </>
    )
}
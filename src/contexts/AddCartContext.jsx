import { createContext, useContext, useState } from "react";
import { getProductById } from "../data/products";
import { useNavigate } from "react-router-dom";

export const AddCartContext = createContext(null);
export default function CartProvider({ children }) {

  const navigate = useNavigate()

  const [cartItems, setCartItems] = useState([]);

  function addToCart(productId) {
    const existing = cartItems.find((item) => item.id === productId);

    if (existing) {
      const currentQuntity = existing.quantity;
      const updateQuantity = cartItems.map((item) => item.id === productId ? { id: productId, quantity: currentQuntity + 1 } : item)
      setCartItems(updateQuantity);
    }
    else {
      setCartItems([...cartItems, { id: productId, quantity: 1 }])
    }

  }
  function getCartItemWithProduct() {
    return cartItems.map((item) => ({
      ...item,
      product: getProductById(item.id)
    })).filter(item => item.product)
  }
  function removeItem(productId) {
    setCartItems(cartItems.filter((item) => item.id !== productId))

  }
  function updateQuantity(productId, quantity) {
    if (quantity <= 0) {
      removeItem(productId);
      return;
    }
    setCartItems(
      cartItems.map((item) =>
        item.id === productId ? { ...item, quantity } : item)
    )

  }
  function getProductTotal() {
    const total = cartItems.reduce(
      (total, item) => {
        const product = getProductById(item.id);
        return total + (product ? product.price * item.quantity : 0)
      }
      , 0)
    return total;
  }
  function clearCart() {
    setCartItems([]);
    navigate("/");

  }

  return <AddCartContext.Provider value={{ cartItems, addToCart, getCartItemWithProduct, removeItem, updateQuantity, getProductTotal, clearCart }}>{children}</AddCartContext.Provider>

}

// ----creating hook--------
export function useAddCart() {
  const context = useContext(AddCartContext)
  return context;
}
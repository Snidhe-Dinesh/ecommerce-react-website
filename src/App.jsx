import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Auth from './pages/Auth'
import Checkout from './pages/Checkout'
import Navbar from './components/Navbar'
import AuthProvider from './contexts/AuthContext'
import Product from './pages/Product'
import CartProvider from './contexts/AddCartContext'

function App() {

  return (
    <>
   
   <AuthProvider>
   <CartProvider>
    <Navbar></Navbar>
    <div className='hero'>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/auth" element={<Auth/>} />
        <Route path="/checkout" element={<Checkout/>} />
        <Route path="/product/:id" element={<Product/>} />



      </Routes>
    </div>
   </CartProvider>

    </AuthProvider>


    </>
  )
}

export default App

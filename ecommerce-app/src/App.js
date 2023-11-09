import React from 'react'
import { useState } from 'react'
import Products from './components/Products'
import products from './productList'
import Cart from './components/Cart'
import Header from './components/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BsMinecart } from 'react-icons/bs'
import { AiOutlineNotification } from 'react-icons/ai'
const App = () => {
  const [count, setCount] = useState(0)
  const [cart,setCart] = useState([])
  const navBar = {
    backgroundColor: 'black',
    width: '100%',
    color: 'white',
    padding: '30px',
    fontSize: '30px',
    alignItems: 'center',

  }

  const handleAddToCart = (product) => {
    setCount(count + 1);
    let productExist = cart.find((item) => item.id === product.id)
    if (productExist) {
      setCart(
        cart.map((item) => item.id === product.id ? { ...productExist, quantity: productExist.quantity + 1 } :
          item)
      )
    } else {
      setCart([...cart, { ...product, quantity: 1 }])
    }
  }
  console.log('cart', cart)



  return (
    <Router>
      <div>
        <Header
          title="E-COMMERCE APP"
          style={navBar}
          cart={<BsMinecart />}
          count={count}
          notify={<AiOutlineNotification />}
        />
        <Routes>
          <Route path="/" element={<Products products={products} handleAddToCart={handleAddToCart} />} />
          <Route path="/cart" element={<Cart cart={cart} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App
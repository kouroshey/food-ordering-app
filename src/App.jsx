import React, { useState } from 'react';
import {useRoutes } from 'react-router-dom';
import Header from './components/Header/Header';
import routes from './routes';
import Footer from './components/Footer/Footer';
import Cart from './components/Cart/Cart';
import CartContextProvider from './store/CartContextProvider';


const App = () => {
  let router = useRoutes(routes)
  const [cartIsShown, setCartIsShown] = useState(false)
  const showCartHandler = () => {
    setCartIsShown(true)
  }
  const closeCartHandler = () => {
    setCartIsShown(false)
  }
  return (
    <CartContextProvider>
      {cartIsShown && <Cart onCloseCart={closeCartHandler} />}
      <Header onShowCart={showCartHandler} />
      {router} 
      <Footer/>
    </CartContextProvider>

  )
}

export default App  
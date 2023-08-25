import React, { useState } from 'react';
import {useRoutes } from 'react-router-dom';
import Header from './components/Header/Header';
import routes from './routes';
import Footer from './components/Footer/Footer';
import Cart from './components/Cart/Cart';


const App = () => {
  let router = useRoutes(routes)
  const [cartIsShown, setCartIsShown] = useState(false)
  const showCartHandler = () => {
    console.log('show');
    setCartIsShown(true)
  }
  const closeCartHandler = () => {
    setCartIsShown(false)
  }
  return (
    <>
      {cartIsShown && <Cart onCloseCart={closeCartHandler} />}
      <Header onShowCart={showCartHandler} />
      {router} 
      <Footer/>
    </>

  )
}

export default App  
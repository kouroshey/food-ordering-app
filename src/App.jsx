import {useRoutes } from 'react-router-dom';
import Header from './components/Header/Header';
import routes from './routes';
import Footer from './components/Footer/Footer';
import Cart from './components/Cart/Cart';
import { useSelector, useDispatch } from 'react-redux';
import { cartSliceActions } from './store/cartSlice';

const App = () => {

  let router = useRoutes(routes)
  const cartState = useSelector(state => state.cart.cartIsShown)
  const dispatch = useDispatch()
  const closeCartHandler = () => {
    dispatch(cartSliceActions.hideCartHandler())
  }

  return (
    <>
      {cartState && <Cart onCloseCart={closeCartHandler} />}
      <Header />
      {router} 
      <Footer/>
    </>
  )
}

export default App  
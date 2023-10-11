import { useState, useEffect, ReactElement } from 'react';
import NavbarComp from './NavbarComp';
import CartButton from '../Cart/CartButton';
import { useDispatch } from 'react-redux';
import { cartSliceActions } from '../../store/cartSlice';

const Header = ():ReactElement => {
  // set state for changing header bg when scrolled
  const [isScrolling, setIsScrolling] = useState<boolean>(false)

  const dispatch = useDispatch()
  const showCartHandler = () => {
    dispatch(cartSliceActions.showCartHandler())
  }
  
  useEffect(() => {
    // set function for setting state
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolling(true)
      } else {
        setIsScrolling(false)
      }
    }

    // whenever window scrolled, action handleScroll
    window.addEventListener('scroll', handleScroll)

    // before action handleScroll, remove the previous action
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }

  }, [window.scrollY])



  return (
    <header className='header-container fixed top-0 right-0 left-0 z-40'>
      <div className={`transition duration-300 ease-in-out  ${isScrolling ? 'bg-[#171717f0]' : 'bg-[#14141488]'}`}>
        <NavbarComp />
      </div>
      <div className={`w-full transition duration-300 ease-in-out z-40 ${!isScrolling && 'opacity-0'}`}>
        <CartButton onShowCart={showCartHandler} />
      </div>
    </header>
  )
}

export default Header
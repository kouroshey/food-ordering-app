import React, { useState, useEffect } from 'react';
import NavbarComp from './NavbarComp';
import CartButton from '../Cart/CartButton';

const Header = (props) => {
  // set state for changing header bg when scrolled
  const [isScrolling, setIsScrolling] = useState(false)

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
    <>
      <header className={`header-container fixed top-0 right-0 left-0 transition duration-300 ease-in-out z-40 ${isScrolling ? 'bg-[#171717f0]' : 'bg-transparent'}`}>
        <NavbarComp />
        
        <div className={`w-full transition duration-300 ease-in-out z-40 ${!isScrolling && 'opacity-0' }`}>
          <CartButton onShowCart = {props.onShowCart} />
        </div>
      </header>
    </>
  )
}

export default Header
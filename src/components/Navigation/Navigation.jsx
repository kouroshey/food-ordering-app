import React, { useState, useEffect } from 'react';
import { FaInstagram, FaTwitter, FaWhatsapp, FaFacebookF } from 'react-icons/fa';
import { MdOutlineMenu, MdOutlineClose } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Navigation = ({logo}) => {
  const [isScrolling, setIsScrolling] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        console.log('bg changed');
        setIsScrolling(true)
      } else {
        setIsScrolling(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }

  }, [window.scrollY])


  const iconsArray = [
    <FaInstagram className="w-full h-full" />,
    <FaTwitter className="w-full h-full" />,
    <FaWhatsapp className="w-full h-full" />,
    <FaFacebookF className="w-full h-full" />
  ]

  return (
    <>
      <nav className={`nav-container fixed top-0 right-0 left-0 transition duration-300 ease-in-out z-50 ${isScrolling ? 'bg-[#171717f0]' : 'bg-transparent'}`}>
        <div className="nav-content px-6 py-1 w-full flex relative justify-between md:justify-evenly lg:justify-between items-center">
          <div className="nav-logo flex flex-2 justify-center gap-2 items-center">
            <Link to='/'><img src="img/logo.png" className='w-12 h-12 md:w-20 md:h-20 lg:w-24 lg:h-24' alt="logo"/></Link>
            <div className={`logo bg-${logo} py-1 bg-center bg-cover `}></div>
            <p className='text-white font-bold text-xl md:hidden'>Food App</p>
          </div>

          <MdOutlineMenu className='text-primary text-4xl md:hidden' />
          <div className="nav-menu__sm fixed z-50 left-0 top-0 h-full bg-black/70 backdrop-blur-sm w-full hidden" >
            <div className='flex flex-col ml-16 mr-4 mt-4  bg-black items-start text-white rounded-md'>
              <MdOutlineClose className='text-white hover:text-primary text-2xl absolute right-5' />
              <ul className='realtive'>
                <li className='text-md p-2 hover:text-primary w-full lg:text-md hover:border-black hover:cursor-pointer'>Home</li>
                <li className='text-md p-2 hover:text-primary w-full lg:text-md hover:border-black hover:cursor-pointer'>Menu</li>
                <li className='text-md p-2 hover:text-primary w-full lg:text-md hover:border-black hover:cursor-pointer'>Place</li>
                <li className='text-md p-2 hover:text-primary w-full lg:text-md hover:border-black hover:cursor-pointer'>Contact</li>
              </ul>
            </div>
          </div>

          <div className={`nav-menu__md hidden md:block`}>
            <ul className='flex items-center gap-24 text-white '>
              <li className='text-sm lg:text-md hover:text-primary hover:cursor-pointer'>HOME</li>
              <li className='text-sm lg:text-md hover:text-primary hover:cursor-pointer'>MENU</li>
              <li className='text-sm lg:text-md hover:text-primary hover:cursor-pointer'>PLACE</li>
              <li className='text-sm lg:text-md hover:text-primary hover:cursor-pointer'>CONTACT</li>
            </ul>
          </div>
          <div className="nav-links gap-5 hidden lg:flex">
            {
              iconsArray.map(icon => (
                <div key={Math.random()} className="social-container w-7 h-7 p-1 bg-primary rounded-full flex justify-center items-center">
                  {icon}
                </div>
              ))
            }
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navigation
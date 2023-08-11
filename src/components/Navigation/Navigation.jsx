import React from 'react';
import { FaInstagram, FaTwitter, FaWhatsapp, FaFacebookF, } from 'react-icons/fa';


const Navigation = () => {
  const iconsArray = [
    <FaInstagram className = "w-full h-full" />,
    <FaTwitter  className ="w-full h-full" />,
    <FaWhatsapp  className ="w-full h-full"/>,
    <FaFacebookF className="w-full h-full" />
  ]
  
  return (
    <>
      <nav className='nav-container w-full px-12 pt-5 fixed'>
        <div className="nav-content w-full flex justify-between items-center">
          <div className="nav-logo">
            <img src="./pictures/logo.png" alt="site-logo" className='w-40' />
          </div>
          <div className="nav-menu">
            <ul className='flex items-center gap-24 text-white '>
              <li className='text-sm hover:text-primary hover:cursor-pointer'>HOME</li>
              <li className='text-sm hover:text-primary hover:cursor-pointer'>MENU</li>
              <li className='text-sm hover:text-primary hover:cursor-pointer'>PLACE</li>
              <li className='text-sm hover:text-primary hover:cursor-pointer'>CONTACT</li>
            </ul>
          </div>
          <div className="nav-links flex gap-5">
            {
              iconsArray.map(icon => (
                <div className="social-container w-7 h-7 p-1 bg-primary rounded-full flex justify-center items-center">
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
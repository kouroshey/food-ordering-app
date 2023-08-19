import React from 'react'
import { Link } from 'react-router-dom'
import { FaTelegramPlane, FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa'
const Footer = () => {
    return (
        <>
            <div className="footer w-full p-8 bg-gray-800">
                <div className="footer-content  w-full flex flex-col md:flex-row items-center gap-8 md:justify-evenly">
                    <div className="footer-logo flex items-center gap-2 pt-2 md:w-max">
                        <Link to='/'><img src="img/logo.png" className='w-12 h-12 md:w-20 md:h-20 lg:w-24 lg:h-24' alt="logo" /></Link>
                        <p className='text-white font-bold text-xl md:text-3xl'>Food App</p>
                    </div>
                    <ul className='footer-ul flex gap-2 items-center w-full justify-evenly md:w-max md:flex-col md:items-start'>
                        <li className='hover:scale-110 hover:text-primary transition-all ease-in-out text-white text-sm'>HOME</li>
                        <li className='hover:scale-110 hover:text-primary transition-all ease-in-out text-white text-sm'>ABOUT US</li>
                        <li className='hover:scale-110 hover:text-primary transition-all ease-in-out text-white text-sm'>CONTACT</li>
                        <li className='hover:scale-110 hover:text-primary transition-all ease-in-out text-white text-sm'>PLACE</li>
                    </ul>
                    <ul className='footer-ul flex gap-2 items-center w-full justify-between md:w-max md:flex-col md:items-start'>
                        <li className='hover:scale-110 hover:text-primary transition-all ease-in-out text-white text-sm text-center'>PRIVACY AND SECRURITY</li>
                        <li className='hover:scale-110 hover:text-primary transition-all ease-in-out text-white text-sm text-center'>WEBSITE RULES</li>
                        <li className='hover:scale-110 hover:text-primary transition-all ease-in-out text-white text-sm text-center'>COMMON QUESTIONS</li>
                    </ul>
                    
                    <div className="footer-social-section flex gap-8 items-center w-full justify-center md:order-1 md:gap-1 md:w-max">
                        <FaInstagram className='font-bold text-3xl hover:scale-110 text-white hover:text-primary transition-all ease-in-out' />
                        <FaTelegramPlane className='font-bold text-3xl hover:scale-110 text-white hover:text-primary transition-all ease-in-out' />
                        <FaFacebookF className='font-bold text-3xl hover:scale-110 text-white hover:text-primary transition-all ease-in-out' />
                        <FaTwitter className='font-bold text-3xl hover:scale-110 text-white hover:text-primary transition-all ease-in-out' />
                    </div>

                    
                </div>
            </div>
        </>
    )
}

export default Footer
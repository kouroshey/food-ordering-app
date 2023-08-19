import React, { useRef } from 'react'
import { MdOutlineMenu, MdOutlineClose } from 'react-icons/md';
import { FaInstagram, FaTwitter, FaWhatsapp, FaFacebookF } from 'react-icons/fa';
import {Link} from 'react-router-dom'


const NavbarComp = () => {
    const showMenuHandler = () => {
        smMenu.current.classList.toggle('hidden')
    }

    //setting a ref for menu in sm size
    const smMenu = useRef()

    //an array for nevbar icons to using better. i will do map on this
    const iconsArray = [
        { id: 1, icon: <FaInstagram className="w-full h-full" /> },
        { id: 2, icon: <FaTwitter className="w-full h-full" /> },
        { id: 3, icon: <FaWhatsapp className="w-full h-full" /> },
        { id: 4, icon: <FaFacebookF className="w-full h-full" /> }
    ]
    return (
        <>

            <nav>
                <div className="header-content px-6 py-1 w-full flex relative justify-between md:justify-evenly lg:justify-between items-center">
                    <div className="header-logo flex flex-2 justify-center gap-2 items-center">
                        <Link to='/'><img src="img/logo.png" className='w-12 h-12 md:w-20 md:h-20 lg:w-24 lg:h-24' alt="logo" /></Link>
                        <p className='text-white font-bold text-xl md:hidden'>Food App</p>
                    </div>
                    <MdOutlineMenu className='text-primary text-4xl md:hidden hover:scale-110 hover:text-white transition-all ease-in-out' onClick={showMenuHandler} />
                    <div className="nav-menu__sm fixed z-50 left-0 top-0 h-full bg-black/70 backdrop-blur-sm w-full hidden" ref={smMenu} >
                        <div className='flex flex-col ml-16 mr-4 mt-4  bg-black items-start text-white rounded-md'>
                            <MdOutlineClose className='text-white hover:text-primary text-2xl absolute right-5' onClick={showMenuHandler} />
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
                    <div className="nav-icons gap-5 hidden lg:flex">
                        {iconsArray.map(icon => (
                            <div
                                key={icon.id}
                                className="social-container w-7 h-7 p-1 bg-primary rounded-full flex justify-center items-center"
                            >
                                {icon.icon}
                            </div>
                        ))}
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavbarComp
import { useRef } from 'react';
import { Link } from 'react-router-dom';

import { MdOutlineMenu, MdOutlineClose } from 'react-icons/md';

const MobileMenu = () => {
    const showMenuHandler = () => {
        smMenu.current.classList.toggle('hidden')
    }

    //setting a ref for menu in sm size
    const smMenu = useRef()
    return (
        <>
            <MdOutlineMenu className='text-primary text-4xl md:hidden hover:scale-110 hover:text-white transition-all ease-in-out' onClick={showMenuHandler} />
            <div className="nav-menu__sm fixed z-50 left-0 top-0 h-full bg-black/70 backdrop-blur-sm w-full hidden" ref={smMenu} >
                <div className='flex flex-col ml-16 mr-4 mt-4  bg-black items-start text-white rounded-md'>
                    <MdOutlineClose className='text-white hover:text-primary text-2xl absolute right-5' onClick={showMenuHandler} />
                    <ul className='realtive'>
                        <Link><li className='text-md p-2 hover:text-primary w-full lg:text-md hover:border-black hover:cursor-pointer' onClick={showMenuHandler}>Home</li></Link>
                        <Link><li className='text-md p-2 hover:text-primary w-full lg:text-md hover:border-black hover:cursor-pointer' onClick={showMenuHandler}>Category</li></Link>
                        <Link><li className='text-md p-2 hover:text-primary w-full lg:text-md hover:border-black hover:cursor-pointer' onClick={showMenuHandler}>Place</li></Link>
                        <Link><li className='text-md p-2 hover:text-primary w-full lg:text-md hover:border-black hover:cursor-pointer' onClick={showMenuHandler}>Popular Foods</li></Link>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default MobileMenu
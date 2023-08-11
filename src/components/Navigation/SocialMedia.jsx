import React from 'react'
import { FaInstagram, FaTwitter, FaWhatsapp, FaFacebookF, } from 'react-icons/fa'


const SocialMedia = (props) => {
    return (
        <>
            <div className="social-container w-7 h-7 p-1 bg-primary rounded-full flex justify-center items-center">
                <FaInstagram className='w-full h-full' />
            </div>
            <div className="social-container w-7 h-7 p-1 bg-primary rounded-full flex justify-center items-center">
                <FaTwitter className='w-full h-full' />
            </div>
            <div className="social-container w-7 h-7 p-1 bg-primary rounded-full flex justify-center items-center">
                <FaWhatsapp className='w-full h-full' />
            </div>
            <div className="social-container w-7 h-7 p-1 bg-primary rounded-full flex justify-center items-center">
                <FaFacebookF className='w-full h-full' />
            </div>
        </>
    )
}

export default SocialMedia
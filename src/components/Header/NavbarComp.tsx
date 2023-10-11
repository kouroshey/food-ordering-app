import { ReactElement } from 'react';
import { FaInstagram, FaTwitter, FaWhatsapp, FaFacebookF } from 'react-icons/fa';
import { Link } from 'react-router-dom'
import MobileMenu from './MobileMenu';


const NavbarComp = ():ReactElement => {
    //an array for nevbar icons to using better. i will do map on this
    type Icon = {
        id: number,
        icon: ReactElement,
        path: string
    }
    const iconsArray: Icon[] = [
        { id: 1, icon: <FaInstagram className="w-full h-full hover:text-white transition-all ease-in-out" />, path: 'https://www.instagram.com/' },
        { id: 2, icon: <FaTwitter className="w-full h-full hover:text-white transition-all ease-in-out" />, path: 'https://twitter.com/' },
        { id: 3, icon: <FaWhatsapp className="w-full h-full hover:text-white transition-all ease-in-out" />, path: 'https://www.whatsapp.com/' },
        { id: 4, icon: <FaFacebookF className="w-full h-full hover:text-white transition-all ease-in-out" />, path: 'https://www.facebook.com/' }
    ]

    // this function does: when clicking on a link in nav, scrool in that section
    const scrollToSection = (sectionId:string) => {
        const section = document.querySelector(sectionId) as HTMLElement
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <>

            <nav>
                <div className="header-content px-6 py-1 w-full flex relative justify-between md:justify-evenly lg:justify-between items-center">
                    <div className="header-logo flex flex-2 justify-center gap-2 items-center">
                        <Link to='/'><img src="img/logo.png" className='w-12 h-12 md:w-20 md:h-20 lg:w-16 lg:h-16' alt="logo" /></Link>
                        <p className='text-white font-bold text-xl md:hidden lg:text-2xl lg:block'>Food App</p>
                    </div>
                    <div className="nav-right flex gap-4 md:hidden">
                        <MobileMenu scrollToAction={scrollToSection} />
                    </div>

                    <div className={`nav-menu__md hidden md:block`}>
                        <ul className='flex items-center gap-24 text-white '>
                            <li className='text-sm lg:text-md hover:text-primary hover:cursor-pointer'><a href="#Home" onClick={() => scrollToSection('#Home')}>HOME</a></li>
                            <li className='text-sm lg:text-md hover:text-primary hover:cursor-pointer'><a href="#Category" onClick={() => scrollToSection('#Category')}>CATEGORIES</a></li>
                            <li className='text-sm lg:text-md hover:text-primary hover:cursor-pointer'><a href="">PLACE</a></li>
                            <li className='text-sm lg:text-md hover:text-primary hover:cursor-pointer'><a href="#PopularFoods" onClick={() => scrollToSection('#PopularFoods')}>POPULAR FOODS</a></li>
                        </ul>
                    </div>
                    <div className="nav-icons gap-5 hidden lg:flex">
                        {iconsArray.map(icon => (
                            <a
                                href={icon.path}
                                target='_blank'
                                key={icon.id}
                                className="social-container w-7 h-7 p-1 bg-primary rounded-full flex justify-center items-center hover:scale-110 transition-all ease-in-out"
                            >
                                {icon.icon}
                            </a>
                        ))}
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavbarComp
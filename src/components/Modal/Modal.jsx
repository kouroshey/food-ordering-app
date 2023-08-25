import React from 'react'
import Portal from '../Portal/Portal'
import { MdOutlineClose } from 'react-icons/md'

const Modal = (props) => {

    return (
        <Portal>
            <div className="nav-menu__sm fixed z-50 left-0 top-0 h-full bg-black/20 backdrop-blur-md w-full flex justify-center items-center">
                <div className='flex flex-col text-white p-4 w-[35rem] bg-black items-start rounded-md relative'>
                    <MdOutlineClose className='text-white hover:text-primary text-2xl absolute right-5' onClick={props.onCloseCart} />
                    <h2>this is title</h2>
                    {props.children}
                </div>
            </div>
        </Portal>
    )
}

export default Modal
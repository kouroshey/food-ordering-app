import React from 'react'
import { MdShoppingCart } from 'react-icons/md'

const CartButton = (props) => {
    return (
        <>
            <div onClick={props.onShowCart} className="food-order flex gap-2 bg-black border border-primary text-primary px-2 rounded-md hover:scale-110 transition-all ease-in-out cursor-pointer items-center">
                <span>cart</span>
                <MdShoppingCart onClick={props.onCloseCart} className='font-bold text-xl' />
            </div>
        </>
    )
}

export default CartButton
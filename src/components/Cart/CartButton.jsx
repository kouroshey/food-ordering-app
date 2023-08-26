import React from 'react'
import { MdShoppingCart } from 'react-icons/md'

const CartButton = (props) => {
    return (
        <>
            <div onClick={props.onShowCart} className="food-order justify-center py-2 flex gap-2 bg-primary text-black px-2 transition-all ease-in-out cursor-pointer items-center">
                <span>cart</span>
                <MdShoppingCart onClick={props.onCloseCart} className='font-bold text-xl' />
            </div>
        </>
    )
}

export default CartButton
import React, {useContext} from 'react'
import { MdShoppingCart } from 'react-icons/md'
import CartContext from '../../store/cart-context'

const CartButton = (props) => {
    const cartCtx = useContext(CartContext)
    const numberOfCartItems = cartCtx.items.length
    return (
        <>
            <div onClick={props.onShowCart} className="food-order justify-center flex gap-2 bg-green-500 text-black px-2 transition-all ease-in-out cursor-pointer items-center">
                <div className="cart-button-content flex gap-2 items-center relative p-2">
                    <span className='text-white'>Cart</span>
                    <MdShoppingCart onClick={props.onCloseCart} className='font-bold text-xl' />
                    <span className='text-black bg-primary rounded-[50%] w-4 h-4 flex text-xs absolute top-1 right-0 items-center justify-center'>{numberOfCartItems}</span>
                </div>
            </div>
        </>
    )
}

export default CartButton
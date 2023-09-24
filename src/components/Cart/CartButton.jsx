import React, {useContext} from 'react'
import { MdShoppingCart } from 'react-icons/md'
import CartContext from '../../store/cart-context'

const CartButton = (props) => {
    const cartCtx = useContext(CartContext)
    const numberOfCartItems = cartCtx.items && cartCtx.items.reduce((curNum, item) => {
        return curNum + item.amount
    }, 0) 
    return (
        <>
            <div onClick={props.onShowCart} className="justify-center flex gap-2 bg-primary text-black px-2 transition-all ease-in-out cursor-pointer items-center">
                <div className="cart-button-content flex gap-2 items-center relative p-2 hover:scale-105 transition ease-in-out">
                    <span className='text-white'>Cart</span>
                    <MdShoppingCart onClick={props.onCloseCart} className='font-bold text-xl' />
                    <span className='text-black bg-green-500 text-white rounded-[50%] w-4 h-4 flex text-xs absolute top-1 right-0 items-center justify-center'>{numberOfCartItems}</span>
                </div>
            </div>
        </>
    )
}

export default CartButton
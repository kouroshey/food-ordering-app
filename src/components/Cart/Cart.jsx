import React, { useContext } from 'react'
import Modal from '../Modal/Modal'
import CartItem from './CartItem'
import { useDispatch, useSelector } from 'react-redux';
import { cartSliceActions } from '../../store/cartSlice';

const Cart = (props) => {
    const cartItems = useSelector(state => state.cart.items)
    const totalAmount = useSelector(state => state.cart.totalAmount)
    const dispatch = useDispatch()

    const clearHandler = () => {
        dispatch(cartSliceActions.clearCartItemsHandler())
    }

    return (
        <Modal onCloseCart={props.onCloseCart} title={'Cart Details'} width="w-[90%] md:w-[70%] lg:w-[50%]">
            <div className="cart-container w-full mt-6">
                <ul className='w-full flex flex-col rounded-md p-2 gap-8 overflow-auto max-h-96'>

                    {cartItems.length > 0 ? cartItems.map(item => (
                        <CartItem {...item} />
                    )) :
                        <p>
                            <td>You have not any order yet!</td>
                        </p>
                    }

                </ul>
                <div className="cart-bottom flex justify-between items-center p-4">
                    <div>Balance: {totalAmount}</div>
                    <div className="cart-bottom__right flex gap-2">
                        <button onClick={clearHandler} className='hover:scale-110 hover:bg-red-500 hover:text-black transition-all ease-in-out border border-red-500 border-sm px-4 py-2 rounded-md text-center'>clear</button>
                        <button className='hover:scale-110 hover:bg-green-500 hover:text-black transition-all ease-in-out border border-green-500 border-sm px-4 py-2 rounded-md text-center'>order</button>
                    </div>
                </div>
            </div>
        </Modal>
    )
}

export default Cart
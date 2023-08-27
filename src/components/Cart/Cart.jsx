import React, { useContext, useState } from 'react'
import Modal from '../Modal/Modal'
import CartItem from './CartItem'
import CartContext from '../../store/cart-context'


const Cart = (props) => {
    const cartCtx = useContext(CartContext)
    const [cartItems, setCartItems] = useState(cartCtx.items)
    return (
        <Modal onCloseCart={props.onCloseCart} title={'Your Cart Details:'}>
            <div className="cart-container w-full mt-6">
                <table className='w-full flex flex-col border border-white rounded-md p-2'>
                    <tr className='flex justify-between mb-2'>
                        <th className='text-primary'>amount</th>
                        <th className='text-primary'>food</th>
                        <th className='text-primary'>price</th>
                    </tr>
                    {cartItems.length > 0 ? cartItems.map(item => (
                        <CartItem {...item} />
                    )) :
                        <tr>
                            <td>You have not any order yet!</td>
                        </tr>
                    }

                </table>
                <div className="cart-bottom flex justify-between items-center p-4">
                    <div>Balance: {cartCtx.totalAmount}</div>
                    <button className='bg-green-500 px-4 py-2 rounded-md text-center'>order</button>
                </div>
            </div>
        </Modal>
    )
}

export default Cart
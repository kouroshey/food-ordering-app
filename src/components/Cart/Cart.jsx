import React from 'react'
import Modal from '../Modal/Modal'
import CartItem from './CartItem'


const Cart = (props) => {
    return (
        <Modal onCloseCart={props.onCloseCart} title={'Your Cart Details:'}>
            <div className="cart-container w-full mt-6">
                <table className='w-full flex flex-col border border-white rounded-md p-2'>
                    <tr className='flex justify-between mb-2'>
                        <th className='text-primary'>ID</th>
                        <th className='text-primary'>food</th>
                        <th className='text-primary'>price</th>
                    </tr>
                    <CartItem/>
                    <CartItem/>
                    <CartItem/>
                    <CartItem/>
                    <CartItem/>
                </table>
           </div>
        </Modal>
    )
}

export default Cart
import React, { useContext, useState } from 'react'
import Modal from '../Modal/Modal'
import CartItem from './CartItem'
import CartContext from '../../store/cart-context'


const Cart = (props) => {
    const cartCtx = useContext(CartContext)
    const addItemHandler = item => {
        item = { ...item, amount:1 }
        cartCtx.addItem(item)
    }
    const removeItemHandler = id => {
        cartCtx.removeItem(id)
    }
    return (
        <Modal onCloseCart={props.onCloseCart} title={'Cart Details'} width="w-[90%] md:w-[70%] lg:w-[50%]">
            <div className="cart-container w-full mt-6">
                <ul className='w-full flex flex-col rounded-md p-2 gap-3'>
                    
                    {cartCtx.items.length > 0 ? cartCtx.items.map(item => (
                        <CartItem {...item} addItemHandler = {addItemHandler.bind(null, item)} removeItemHandler= {removeItemHandler.bind(null, item.id)} />
                    )) :
                        <p>
                            <td>You have not any order yet!</td>
                        </p>
                    }

                </ul>
                <div className="cart-bottom flex justify-between items-center p-4">
                    <div>Balance: {cartCtx.totalAmount}</div>
                    <button className='hover:scale-110 hover:bg-green-500 hover:text-black transition-all ease-in-out border border-green-500 border-sm px-4 py-2 rounded-md text-center'>order</button>
                </div>
            </div>
        </Modal>
    )
}

export default Cart
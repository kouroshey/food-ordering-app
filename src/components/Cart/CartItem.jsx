import React, { useState } from 'react'
import { AiOutlinePlus, AiOutlineLine, AiOutlineClose } from 'react-icons/ai';
import { useSelector, useDispatch } from 'react-redux';
import { cartSliceActions } from '../../store/cartSlice';


const CartItem = (props) => {
    const [foodAmount, setFoodAmount] = useState(props.quantity)
    const addFoodToCartHandler = () => {
        dispatch(cartSliceActions.addToCartHandler(props))
    }
    const removeFromFoodCartHandler = () => {
        dispatch(cartSliceActions.removeFromCartHandler(props.id))

    }

    const dispatch = useDispatch()
    return (
        <>
            <li className='flex justify-between after:w-full after:bg-green-500 after:h-[1px] after:absolute relative after:-bottom-1 mb-3'>
                <div className="cart-item-left flex flex-col gap-3">
                    <span className='font-bold text-2xl'>{props.title}</span>
                    <div>
                        <div className='flex gap-2 items-center'>
                            <span className='text-lg text-primary'>Price:</span>
                            <span>{props.price}   $</span>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <span className='text-lg text-primary'>Amount:</span>
                            <span>{props.quantity}</span>
                        </div>
                    </div>
                </div>
                <div className="cart-item-right flex gap-2 items-center">
                    <div className='p-1 hover:scale-110 hover:bg-green-500 rounded-md transition-all ease-in-out border border-green-500 border-sm'>
                        <AiOutlinePlus className='font-bold text-xl hover:text-black ' onClick={addFoodToCartHandler} />
                    </div>
                    <div className='p-1 hover:scale-110 hover:bg-green-500 rounded-md transition-all ease-in-out border border-green-500 border-sm'>
                        <AiOutlineLine className='font-bold text-xl hover:text-black ' onClick={removeFromFoodCartHandler} />
                    </div>
                </div>
            </li>
        </>
    )
}

export default CartItem
import React, { useState } from 'react'
import { AiOutlinePlus, AiOutlineLine, AiOutlineClose } from 'react-icons/ai';


const CartItem = (props) => {
    const [foodAmount,setFoodAmount] = useState(props.amount)
    const addFoodToCartHandler = () => {
        props.addItemHandler(props)
        setFoodAmount(prev => prev += 1)
    }
    const removeFromFoodCartHandler = () => {
        props.removeItemHandler(props.id)
        setFoodAmount(prev => prev -= 1)
    }
    return (
        <>
            <li className='flex justify-between after:w-full after:bg-green-500 after:h-[1px] after:absolute relative after:-bottom-1 mb-3'>
                <div className="cart-item-left flex flex-col ga-2">
                    <span className='font-bold text-xl'>{props.title}</span>
                    <div className='flex gap-10'>
                        <span>{props.price}   $</span>
                        <span className='flex items-center justify-center'>
                            <AiOutlineClose className='text-xs' />
                            <span>{foodAmount}</span>
                        </span>
                    </div>
                </div>
                <div className="cart-item-right flex gap-2 items-center">
                    <div className='p-1 hover:scale-110 hover:bg-green-500 rounded-md transition-all ease-in-out border border-green-500 border-sm'>
                        <AiOutlinePlus className='font-bold text-xl hover:text-black ' onClick={addFoodToCartHandler}/>
                    </div>
                    <div className='p-1 hover:scale-110 hover:bg-green-500 rounded-md transition-all ease-in-out border border-green-500 border-sm'>
                        <AiOutlineLine className='font-bold text-xl hover:text-black ' onClick={removeFromFoodCartHandler}/>
                    </div>
                </div>
            </li>
        </>
    )
}

export default CartItem
import React from 'react'
import {MdAddShoppingCart, MdOutlineRemoveShoppingCart } from 'react-icons/md';

const FoodComp = (props) => {
    const {title, img, price} = props.food

    return (
        <>
            <div className='food-card border-sm border-gray-300 w-full border rounded-md shadow-md'>
                <div className='food-img flex flex-wrap w-full rounded-md'>
                    <img src={img} className='rounded-t-md' alt="" srcset="" />
                </div>
                <div className='flex items-start w-full gap-3 flex-col p-4'>
                    <p className='food-name font-bold text-xl '>{title}</p>
                    <p className='food-price font-thin text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ex </p>
                    <div className="food-options w-full flex justify-between items-center">
                        <p className='food-price text-primary text-2xl'>{price} $</p>
                        <div className="food-order flex gap-2 bg-primary p-2 rounded-md hover:scale-110 transition-all ease-in-out cursor-pointer">
                            <span>add to cart</span>
                            <MdAddShoppingCart className='font-bold text-2xl' />
                        </div>
                            {/* <MdOutlineRemoveShoppingCart className='font-bold text-2xl hover:scale-125 ' /> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default FoodComp
import React from 'react'
import { MdFavoriteBorder, MdStarBorder, MdAddShoppingCart, MdOutlineRemoveShoppingCart } from 'react-icons/md';
import { IconContext } from 'react-icons';

const FoodComp = () => {

    return (
        <>
            <div className='food-card border-sm border-gray-300 w-full border rounded-md shadow-md'>
                <div className='food-img flex flex-wrap w-full rounded-md'>
                    <img src="img/havana.jpg" className='rounded-t-md' alt="" srcset="" />
                </div>
                <div className='flex items-start w-full gap-3 flex-col p-4'>
                    <p className='food-name font-bold text-xl'>Havana Pasta</p>
                    <p className='food-price font-thin text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ex </p>
                    <div className="food-options w-full flex justify-between">
                        <p className='food-price text-red-400'>20$</p>
                        <div className="food-order flex gap-2">
                            <MdAddShoppingCart className='font-bold text-2xl hover:scale-110 ' />
                            {/* <MdOutlineRemoveShoppingCart className='font-bold text-2xl hover:scale-125 ' /> */}
                            <MdFavoriteBorder className='font-bold text-2xl hover:scale-110 '/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FoodComp
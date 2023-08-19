import React from 'react'
import { MdFavoriteBorder, MdStarBorder, MdAddShoppingCart, MdOutlineRemoveShoppingCart } from 'react-icons/md';
import { IconContext } from 'react-icons';

const FoodComp = (props) => {
    const {id, title, img, price} = props.food

    return (
        <>
            <div className='food-card border-sm border-gray-300 w-full border rounded-md shadow-md'>
                <div className='food-img flex flex-wrap w-full rounded-md'>
                    <img src={img} className='rounded-t-md' alt="" srcset="" />
                </div>
                <div className='flex items-start w-full gap-3 flex-col p-4'>
                    <p className='food-name font-bold text-xl '>{title}</p>
                    <p className='food-price font-thin text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ex </p>
                    <div className="food-options w-full flex justify-between">
                        <p className='food-price text-primary'>{price} $</p>
                        <div className="food-order flex gap-2">
                            <MdAddShoppingCart className='font-bold text-2xl hover:scale-110 hover:text-primary transition-all ease-in-out' />
                            {/* <MdOutlineRemoveShoppingCart className='font-bold text-2xl hover:scale-125 ' /> */}
                            <MdFavoriteBorder className='font-bold text-2xl hover:scale-110 hover:text-primary transition-all ease-in-out'/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FoodComp
import React from 'react'
import Card from '../Card/Card'
import {MdFavoriteBorder, MdStarBorder, MdAdd} from 'react-icons/md'

const FoodListMain = () => {
    // const foodsArray = [
    //     { id: 1, name: 'kebab', price: '10$', rate: 5, img: '../img/foods/kebab.jpg'}
    // ]
    return (
        <>
            <div className='food-card border-sm border-gray-300 w-[16rem] border rounded-md shadow-md p-4'>
                <div className='food-img flex flex-wrap w-full h-[12rem] rounded-md'>                    
                    <img src="img/foods/kebab.jpg" alt="" srcset="" />
                </div>
                <div className='flex items-center w-full flex-col'>
                    <p className='food-name'>چلوکباب</p>
                    <p className='food-price'>20$</p>
                    <p className='food-rate'>5 star <MdStarBorder style={{width:"1rem", height:"1rem"}}/></p>
                    <div className="food-options">
                        <div className="food-order">

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FoodListMain
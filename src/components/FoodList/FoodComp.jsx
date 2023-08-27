import React, { useRef, useState, useContext } from 'react'
import { MdAddShoppingCart } from 'react-icons/md';
import CartContext from '../../store/cart-context';

const FoodComp = (props) => {
    const { title, img, price, id } = props.food
    const [addIsClicked, setAddIsClicked] = useState(false)
    const inputRef = useRef()
    const cartCtx = useContext(CartContext)

    const inputShowHandler = () => {
        setAddIsClicked(true)
    }

    const inputCloseHandler = () => {
        setAddIsClicked(false)
    }

    const addFoodToCartHandler = () => {
        const foodData = {
            id: id,
            title: title,
            price: price,
            amount: inputRef.current.value
        }
        cartCtx.addItem(foodData)
    }



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
                        <p className='food-price text-green-500 text-2xl'>{price} $</p>
                        <div className="food-ordering-section flex gap-2">
                            {addIsClicked ?
                                <>
                                    <button onClick={inputCloseHandler} className=" text-white food-order-button flex gap-2 bg-red-500 p-2 rounded-md hover:scale-110 transition-all ease-in-out cursor-pointer">
                                        clear
                                    </button>
                                    <button onClick={addFoodToCartHandler} className=" text-white food-order-button flex gap-2 bg-green-500 p-2 rounded-md hover:scale-110 transition-all ease-in-out cursor-pointer">
                                        add
                                    </button>
                                    <input ref={inputRef} type="number" className=' border-b border-primary w-10 text-xl pl-2 outline-none' max='5' min='1' defaultValue='1' />
                                </>
                                :
                                <div onClick={inputShowHandler} className="food-order-button flex gap-2 bg-primary p-2 rounded-md hover:scale-110 transition-all ease-in-out cursor-pointer">
                                    <span>add to cart</span>
                                    <MdAddShoppingCart className='font-bold text-2xl' />
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FoodComp
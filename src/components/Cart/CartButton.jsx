import { MdShoppingCart } from 'react-icons/md'
import { useSelector } from 'react-redux'

const CartButton = (props) => {
    const cartItemsNumber = useSelector(state => state.cart.totalItems)
    return (
        <>
            <div onClick={props.onShowCart} className="justify-center flex gap-2 bg-primary text-black px-2 transition-all ease-in-out cursor-pointer items-center">
                <div className="cart-button-content flex gap-2 items-center relative p-2 hover:scale-105 transition ease-in-out">
                    <span className='text-white'>Cart</span>
                    <MdShoppingCart className='font-bold text-xl' />
                    <span className='bg-green-500 text-white rounded-[50%] w-4 h-4 flex text-xs absolute top-1 right-0 items-center justify-center'>{cartItemsNumber}</span>
                </div>
            </div>
        </>
    )
}

export default CartButton
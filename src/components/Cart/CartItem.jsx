import React from 'react'

const CartItem = (props) => {
    return (
        <>
            <tr className='flex justify-between after:w-full after:bg-green-500 after:h-[1px] after:absolute relative after:-top-1 mb-3'>
                <td>{props.amount} *</td>
                <td>{props.title}</td>
                <td>{props.price}   $</td>
            </tr>
        </>
    )
}

export default CartItem
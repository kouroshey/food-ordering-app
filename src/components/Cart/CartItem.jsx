import React from 'react'

const CartItem = () => {
    return (
        <>
            <tr className='flex justify-between after:w-full after:bg-primary after:h-[1px] after:absolute relative after:-top-1 mb-3'>
                <td>1</td>
                <td>kebab</td>
                <td>30 $</td>
            </tr>
        </>
    )
}

export default CartItem
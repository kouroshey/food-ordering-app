import React from 'react'
import CartContext from './cart-context'

function CartContextProvider(props) {
    const addItemHandler = () => {}
    const removeItemHandler = () => {}
    const cartContext = {
        items: [],
        totalAmount: 0,
        addItem: addItemHandler,
        removeItem: removeItemHandler
    }
    return <CartContext.Provider value={cartContext}>
      {props.children}
  </CartContext.Provider>
}

export default CartContextProvider
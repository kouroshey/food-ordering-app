import React, { useReducer } from 'react'
import CartContext from './cart-context'

// an initial value for cartState
const defaultObj = {
  items: [],
  totalAmount: 0
}

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedItems = state.items.concat(action.item)
    const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount
    // console.log(updatedTotalAmount);
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount 
    };

  }
  return defaultObj
}

function CartContextProvider(props) {
  const [cartState, dispatchCart] = useReducer(cartReducer, defaultObj)

  //
  const addItemHandler = (item) => {
    dispatchCart({
      type: 'ADD',
      item: item
    })
  }
  const removeItemHandler = (id) => {
    dispatchCart({
      type: "REMOVE",
      id: id
    })
   }
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler
  }
  return <CartContext.Provider value={cartContext}>
    {props.children}
  </CartContext.Provider>
}

export default CartContextProvider
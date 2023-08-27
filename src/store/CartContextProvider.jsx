import React, { useReducer } from 'react'
import CartContext from './cart-context'

// an initial value for cartState
const defaultObj = {
  items: [],
  totalAmount: 0
}

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount
    const exitingCartItemIndex = state.items.findIndex(item => item.id === action.item.id)
    const exitingCartItem = state.items[exitingCartItemIndex]
    let updatedItems;
    if (exitingCartItem) {
      const updatedItem = {
        ...exitingCartItem,
        amount: exitingCartItem.amount + action.item.amount
      };
      updatedItems = [...state.items]
      updatedItems[exitingCartItemIndex] = updatedItem;
    } else if (action.type === "REMOVE") {
      

    } else {
      updatedItems = state.items.concat(action.item)
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
    };

  }
  if (action.type === "REMOVE") {

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
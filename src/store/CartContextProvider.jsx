import React, { useReducer } from 'react'
import CartContext from './cart-context'

// an initial value for cartState
const defaultObj = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state, action) => {
    if (action.type === "ADD") {
        const updatedTotalAmount = Math.trunc((state.totalAmount + action.item.price * action.item.amount) * 10) / 10
        console.log('log1', action.item.price);
        console.log('log2', action.item.amount);
        console.log('log3', action.item.price * action.item.amount);
        console.log('log4', state.totalAmount);
        console.log('log5', updatedTotalAmount);
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
        } else {
            updatedItems = state.items.concat(action.item)
        }

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        };

    }
    if (action.type === "REMOVE") {
        const exitingCartItemIndex = state.items.findIndex(item => item.id === action.id)
        const exitingCartItem = state.items[exitingCartItemIndex]
        const updatedTotalAmount = Math.trunc((state.totalAmount - exitingCartItem.price) * 10) / 10
        let updatedItems;
        if (exitingCartItem.amount === 1) {
            updatedItems = state.items.filter(item => item.id !== action.id)
            console.log(updatedItems);
            return {
                items: updatedItems,
                totalAmount: updatedTotalAmount
            }
        } else {
            const updatedItem = { ...exitingCartItem, amount: exitingCartItem.amount - 1 };
            const updatedItems = [...state.items]
            updatedItems[exitingCartItemIndex] = updatedItem
            return {
                items: updatedItems,
                totalAmount: updatedTotalAmount
            }
        }
    }
    return state
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
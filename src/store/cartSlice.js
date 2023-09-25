import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    totalAmount: 0,
    cartIsShown: false,
    totalItems: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addToCartHandler(state, action) {
            const newItem = action.payload
            state.totalAmount = Number(Math.round( (state.totalAmount + newItem.price) + "e6") + "e-6")
            const exitingCartItem = state.items.find(item => item.id === newItem.id)
            state.totalItems++
            if (!exitingCartItem) {
                state.items.push({
                    id: newItem.id,
                    title: newItem.title,
                    price: newItem.price,
                    quantity: 1
                })
            } else {
                exitingCartItem.quantity = exitingCartItem.quantity + 1;
            }
        
        },  
        removeFromCartHandler(state, action) {
            const exitingCartItem = state.items.find(item => item.id == action.payload)
            state.totalItems--
            if (exitingCartItem && exitingCartItem.quantity == 1) {
                state.items = state.items.filter(item => item.id !== exitingCartItem.id)
                state.totalAmount = state.totalAmount - exitingCartItem.price   
            } 
            if (exitingCartItem && exitingCartItem.quantity > 1) {
                exitingCartItem.quantity--
                state.totalAmount = state.totalAmount - exitingCartItem.price   
            }
        },
        showCartHandler(state) {
            state.cartIsShown = true
        },
        hideCartHandler(state) {
            state.cartIsShown = false
        }
    }
})

export default cartSlice.reducer
export const cartSliceActions = cartSlice.actions
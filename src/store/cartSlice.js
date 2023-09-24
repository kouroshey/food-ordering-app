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
            state.totalAmount = state.totalAmount + newItem.price
            const exitingCartItem = state.items.find(item => item.id === newItem.id)
            state.totalAmount++
            state.totalItems++
            if (!exitingCartItem) {
                state.items.push({
                    id: newItem.id,
                    title: newItem.title,
                    price: newItem.price,
                    totalPrice: newItem.price,  
                    quantity: 1
                })
            } else {
                exitingCartItem.quantity = exitingCartItem.quantity + 1;
                exitingCartItem.totalPrice = exitingCartItem.totalPrice + newItem.price
            }
        
        },  
        removeFromCartHandler(state, action) {
            
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
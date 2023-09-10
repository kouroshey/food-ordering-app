import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    totalAmount: 0
}

// const foodData = {
//     id,
//     title,
//     price,
//     totalPrice,
//     quantity: 1
// }


const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addToCart(state, action) {
            const newItem = action.payload
            state.totalAmount = state.totalAmount + newItem.price
            const exitingCartItem = state.items.find(item => item.id === newItem.id)
            state.totalAmount++
            if (!exitingCartItem) {
                state.items.push({
                    id: newItem.id,
                    title: newItem.title,
                    price: newItem.price,
                    totalPrice: newItem.price,  
                    quantity: 1
                })
            } else {
                exitingCartItem++;
                exitingCartItem.totalPrice = exitingCartItem.totalPrice + newItem.price
            }
        
        },  
        removeFromCartHandler(state, action) {
            
        }
    }
})

export default cartSlice.reducer
export const cartSliceActions = cartSlice.actions
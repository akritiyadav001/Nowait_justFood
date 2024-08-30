import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',  
    initialState:{
        items:["Salad", "Thai Curry", "Dahi Vada"]
    } ,
    reducers:{
        addItems: (state,action) =>{
            // Directly mutating the state here
            state.items.push(action.payload)
        },
        removeItem: (state) =>{
            state.items.pop();
        },
        clearCart:(state) =>{
                state.items.length = 0;
        }
    }         
})


export const {addItems, removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;
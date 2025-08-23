import { IMockDataProps } from "@app/product/[id]/page"
import { createSlice } from "@reduxjs/toolkit";

interface ICartState {
    items: IMockDataProps[]
}

const initialState: ICartState = {
    items: []
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProductToCart: (state, action) => {
            state.items.push(action.payload);
        }
    }
})

export const { addProductToCart } = cartSlice.actions;

export default cartSlice.reducer;

export const selectCartItems = (state: { cart: ICartState }) => state.cart.items;
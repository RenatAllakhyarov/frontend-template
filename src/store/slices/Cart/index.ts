import { IProduct } from "src/domains/product";
import { createSlice } from "@reduxjs/toolkit";

interface ICartState {
    items: IProduct[]
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
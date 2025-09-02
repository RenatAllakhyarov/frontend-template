import Cart from "@domains/cart";
import { IProduct } from "src/domains/product";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ICartState {
    cart: Cart;
}

const initialState: ICartState = {
    cart: new Cart(),
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addProductToCart: (state, action: PayloadAction<IProduct>) => {
            state.cart.addProduct(action.payload);
        },
        removeProductFromCart: (state, action: PayloadAction<string>) => {
            state.cart.deleteProduct(action.payload);
        },
        increaseProductQuantity: (state, action: PayloadAction<string>) => {
            state.cart.increaseQuantity(action.payload);
        },
        decreaseProductQuantity: (state, action: PayloadAction<string>) => {
            state.cart.decreaseQuantity(action.payload);
        },
        clearCart: (state) => {
            state.cart.clearCart();
        },
    },
});

export const {
    addProductToCart,
    removeProductFromCart,
    increaseProductQuantity,
    decreaseProductQuantity,
    clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

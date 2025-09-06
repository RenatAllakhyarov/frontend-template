import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Cart from "@domains/cart";
import { IProduct } from "src/domains/product";

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
            state.cart = new Cart(state.cart.getProducts());
            state.cart.addProduct(action.payload);
        },
        removeProductFromCart: (state, action: PayloadAction<string>) => {
            state.cart = new Cart(state.cart.getProducts());
            state.cart.deleteProduct(action.payload);
        },
        increaseProductQuantity: (state, action: PayloadAction<string>) => {
            state.cart = new Cart(state.cart.getProducts());
            state.cart.increaseQuantity(action.payload);
        },
        decreaseProductQuantity: (state, action: PayloadAction<string>) => {
            state.cart = new Cart(state.cart.getProducts());
            state.cart.decreaseQuantity(action.payload);
        },
        clearCart: (state) => {
            state.cart = new Cart(state.cart.getProducts());
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

import { IProduct } from "src/domains/product";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ICartState {
    items: IProduct[];
}

const initialState: ICartState = {
    items: [],
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addProductToCart: (state, action: PayloadAction<IProduct>) => {
            const addingProduct = action.payload;
            const existingProduct = state.items.find(
                (product) => product.id === addingProduct.id
            );

            if (!existingProduct) {
                state.items.push({ ...addingProduct, quantity: 1 });
            }

            if (existingProduct) {
                existingProduct.quantity = existingProduct.quantity;
            }
        },
        removeProductFromCart: (state, action: PayloadAction<string>) => {
            state.items = state.items.filter(
                (product) => product.id !== action.payload
            );
        },
        increaseProductQuantity: (state, action: PayloadAction<string>) => {
            const existingProduct = state.items.find(
                (product) => product.id === action.payload
            );

            if (existingProduct) {
                existingProduct.quantity = existingProduct.quantity + 1;
            }
        },
        decreaseProductQuantity: (state, action: PayloadAction<string>) => {
            const existingProduct = state.items.find(
                (product) => product.id == action.payload
            );

            if (!existingProduct) {
                return;
            }

            existingProduct.quantity = existingProduct.quantity - 1;

            if (existingProduct && existingProduct.quantity <= 0) {
                state.items = state.items.filter(
                    (item) => item.id !== action.payload
                );
            }
        },
        clearCart: (state) => {
            state.items = [];
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

export const selectCartItems = (state: { cart: ICartState }) =>
    state.cart.items;

export const selectTotalProducts = (state: { cart: ICartState }) =>
    state.cart.items.reduce((total, product) => total + product.quantity, 0);

export const selectTotalPrice = (state: { cart: ICartState }) => {
    state.cart.items.reduce((total, product) => {
        const productPrice = product.price * product.quantity;

        const discountedPrice = product.price
            ? productPrice * ((100 - product.discount) / 100)
            : productPrice;
        return total + discountedPrice;
    }, 0);
};

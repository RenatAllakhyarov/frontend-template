import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Cart, { ICartProduct } from "@domains/cart";
import { IProduct } from "src/domains/product";

interface ICartState {
    cart: Cart;
}

const initialState: ICartState = {
    cart: new Cart(),
};

const newCartFromLatestCart = (products: ICartProduct[]): Cart => {
    const newCart = new Cart();

    products.forEach((product: ICartProduct) => {
        newCart.addProduct({ ...product, quantity: product.quantity });

        if (!(product.quantity <= 1)) {
            Array.from({ length: product.quantity - 1 }).forEach(() => {
                newCart.increaseQuantity(product.id);
            });
        }
    });

    return newCart;
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addProductToCart: (state, action: PayloadAction<IProduct>) => {
            state.cart = newCartFromLatestCart(state.cart.getProducts());

            state.cart.addProduct(action.payload);
        },
        removeProductFromCart: (state, action: PayloadAction<string>) => {
            state.cart = newCartFromLatestCart(state.cart.getProducts());

            state.cart.deleteProduct(action.payload);
        },
        increaseProductQuantity: (state, action: PayloadAction<string>) => {
            state.cart = newCartFromLatestCart(state.cart.getProducts());

            state.cart.increaseQuantity(action.payload);
        },
        decreaseProductQuantity: (state, action: PayloadAction<string>) => {
            state.cart = newCartFromLatestCart(state.cart.getProducts());

            state.cart.decreaseQuantity(action.payload);
        },
        clearCart: (state) => {
            state.cart = newCartFromLatestCart(state.cart.getProducts());

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

import cartReducer from "@store/slices/Cart";
import marketReducer from "@store/slices/Market";
import userReducer from "@store/slices/User/index";
import applicationReducer from "@store/slices/Application";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        application: applicationReducer,
        cart: cartReducer,
        user: userReducer,
        market: marketReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export type TRootState = ReturnType<typeof store.getState>;

export type TAppDispatch = typeof store.dispatch;

export default store;

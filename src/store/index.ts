import cartReducer from "@store/slices/Cart"
import applicationReducer from "@store/slices/Application";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        application: applicationReducer,
        cart: cartReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export type TRootState = ReturnType<typeof store.getState>;

export type TAppDispatch = typeof store.dispatch;

export default store;

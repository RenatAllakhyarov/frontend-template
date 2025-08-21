import applicationReducer from "@store/slices/Application";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        application: applicationReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export type TRootState = ReturnType<typeof store.getState>;

export type TAppDispatch = typeof store.dispatch;

export default store;

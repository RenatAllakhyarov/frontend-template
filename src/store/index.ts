import ApplicationReducer from "@store/slices/application";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        application: ApplicationReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})

export type TRootState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;
export default store;
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "@domains/product";
import { fetchProducts } from "./thunks";

export interface IMarketSliceProps {
    products: IProduct[];
    isLoading: boolean;
    error: string | null;
}

const initialState: IMarketSliceProps = {
    products: [],
    isLoading: false,
    error: null,
};

const marketSlice = createSlice({
    name: "market",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(
                fetchProducts.fulfilled,
                (state, action: PayloadAction<IProduct[]>) => {
                    state.isLoading = false;
                    state.products = action.payload;
                }
            )
            .addCase(fetchProducts.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message || "Something went wrong";
            });
    },
});

export default marketSlice.reducer;

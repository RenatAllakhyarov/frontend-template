import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "@domains/product";
import  API  from "@api/index";

export interface IMarketSliceProps {
    products: IProduct[];
    status: "idle" | "loading" | "succeeded" | "failed";
    error: string | null;
}

const initialState: IMarketSliceProps = {
    products: [],
    status: "idle",
    error: null,
}

export const fetchProducts = createAsyncThunk(
    "market/fetchProducts",
    async () => {
        try {
            const response = await API.getProducts();

            return response;
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message);
            }
            throw new Error("An unknown error occurred");
        }
    }
);

const marketSlice = createSlice({
    name: "market",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = "loading";
            })

            .addCase(
                fetchProducts.fulfilled,
                (state, action: PayloadAction<IProduct[]>) => {
                    state.status = "succeeded";
                    state.products = action.payload;
                }
            )

            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message || "Something went wrong";
            });
    },
});

export default marketSlice.reducer;

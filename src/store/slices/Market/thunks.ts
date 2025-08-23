import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "@api/index";

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

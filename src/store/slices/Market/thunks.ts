// import API from "@api/index";
import MockAPI from "src/mockApi";
import { IProduct } from "@domains/product";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
    "market/fetchProducts",
    async () => {
        try {
            //TODO while this request is mocked
            // const response = await API.getProducts();

            const response: IProduct[] = await MockAPI.getProducts();

            return response;
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message);
            }

            throw new Error("An unknown error occurred");
        }
    }
);

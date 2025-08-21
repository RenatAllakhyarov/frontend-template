import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Slice } from "@reduxjs/toolkit"
export interface IApplicationSlice {
    isLoading: boolean;
};

const initialState: IApplicationSlice = {
    isLoading: false,
};

export const applicationSlice: Slice<IApplicationSlice> = createSlice({
    name: "application",
    initialState,
    reducers: {
        setIsLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        }
    }
})

export const {
    setIsLoading,
} = applicationSlice.actions;

export default applicationSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
    currentEmail: string;
    isRegistered: boolean;
}

const initialState: UserState = {
    currentEmail: "",
    isRegistered: false,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUserEmail: (state, action: PayloadAction<string>) => {
            state.currentEmail = action.payload;
        },
        setUserRegistered: (state, action: PayloadAction<boolean>) => {
            state.isRegistered = action.payload;
        },
    },
});

export const { setUserEmail, setUserRegistered } = userSlice.actions;
export default userSlice.reducer;

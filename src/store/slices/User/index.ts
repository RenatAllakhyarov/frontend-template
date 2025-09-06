import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
    currentEmail: string;
    isRegistered: boolean;
    id: string;
}

const initialState: UserState = {
    currentEmail: "",
    isRegistered: false,
    id: "",
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
        setUserId: (state, action: PayloadAction<string>) => {
            state.id = action.payload;
        },
    },
});

export const { setUserEmail, setUserRegistered, setUserId } = userSlice.actions;
export default userSlice.reducer;

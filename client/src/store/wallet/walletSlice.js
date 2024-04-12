import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    address:null
};


const walletSlice = createSlice({
    name: 'walletAddress',
    initialState,
    reducers: {
        setAddress(state, action) {
            state.address = action.payload;
        }
    }
});

export const { setAddress } = walletSlice.actions

export default walletSlice.reducer;
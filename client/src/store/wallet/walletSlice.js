import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    address: null,
    activeWallet: false
};


const walletSlice = createSlice({
    name: 'walletAddress',
    initialState,
    reducers: {
        setAddress(state, action) {
            state.address = action.payload;
            state.activeWallet = true;
        }
    }
});

export const { setAddress } = walletSlice.actions;

export default walletSlice.reducer;
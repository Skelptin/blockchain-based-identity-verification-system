import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        loggedInUser: undefined,
    },
    reducers: {
        setLoggedInUser: (state, action) => {
            state.loggedInUser = action.payload;
        },
    },
});

export const { setLoggedInUser } = userSlice.actions;

export const selectLoggedInUser = (state) => state.user.loggedInUser;

export default userSlice.reducer;

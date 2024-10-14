import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { User } from "@/common/types";
import { loadCurrentUser, signIn, signOut, signUp } from "./actions";

type State = {
    user: User | null
}

const initialState: State = {
    user: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addMatcher(
                isAnyOf(signUp.fulfilled, signIn.fulfilled, signOut.fulfilled, loadCurrentUser.fulfilled),
                (state, action) => {
                    state.user = action.payload;
                }
            )
            .addMatcher(
                isAnyOf(signUp.rejected, signIn.rejected, signOut.rejected, loadCurrentUser.rejected),
                (state) => {
                    state.user = null;
                }
            )

    }
});

export { authSlice };

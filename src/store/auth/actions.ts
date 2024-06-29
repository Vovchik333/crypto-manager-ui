import { createAsyncThunk } from "@reduxjs/toolkit";
import { User } from "../../common/types/types";
import { AsyncThunkConfig } from "../../common/types/store/async-thunk-config.type";
import { ActionType } from "./common";

const signUp = createAsyncThunk<
    User, 
    User, 
    AsyncThunkConfig
>(
    ActionType.SIGN_UP,
    async (payload, { extra: { authService } }) => {
        return authService.signUp(payload);
    }
);

const signIn = createAsyncThunk<
    User, 
    Omit<User, 'nickname'>, 
    AsyncThunkConfig
>(
    ActionType.SIGN_IN,
    async (payload, { extra: { authService } }) => {
        return authService.signIn(payload);
    }
);

const signOut = createAsyncThunk<
    null, 
    undefined, 
    AsyncThunkConfig
>(
    ActionType.SIGN_IN,
    async (_payload) => {
        return null;
    }
);

export {
    signUp,
    signIn,
    signOut
}
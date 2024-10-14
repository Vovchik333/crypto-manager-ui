import { createAsyncThunk } from "@reduxjs/toolkit";
import { User, UnregisteredUserRequestBody, RegisteredUserRequestBody } from "@/common/types";
import { AsyncThunkConfig } from "@/common/types/store/async-thunk-config.type";
import { ActionType } from "./common";
import { StorageKey } from "@/lib/enums/storage";

const signUp = createAsyncThunk<
    User, 
    UnregisteredUserRequestBody, 
    AsyncThunkConfig
>(
    ActionType.SIGN_UP,
    async (payload, { extra: { authService } }) => {
        const { user, accessToken } = await authService.signUp(payload);

        localStorage.setItem(StorageKey.TOKEN, accessToken);

        return user;
    }
);

const signIn = createAsyncThunk<
    User, 
    RegisteredUserRequestBody, 
    AsyncThunkConfig
>(
    ActionType.SIGN_IN,
    async (payload, { extra: { authService } }) => {
        const { user, accessToken } = await authService.signIn(payload);

        localStorage.setItem(StorageKey.TOKEN, accessToken);

        return user;
    }
);

const signOut = createAsyncThunk<
    null, 
    undefined, 
    AsyncThunkConfig
>(
    ActionType.SIGN_IN,
    async (_payload) => {
        localStorage.removeItem(StorageKey.TOKEN);

        return null;
    }
);

const loadCurrentUser = createAsyncThunk<
    User, 
    undefined, 
    AsyncThunkConfig
>(
    ActionType.SIGN_IN,
    async (_payload, { extra: { authService } }) => {
        const user = await authService.getCurrentUser();

        return user;
    }
);

export {
    signUp,
    signIn,
    signOut,
    loadCurrentUser
}
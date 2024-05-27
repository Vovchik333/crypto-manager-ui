import { combineReducers } from "@reduxjs/toolkit";
import { authReducer } from "./auth/auth";

type RootReducer = {
    auth: typeof authReducer
}

const rootReducer = combineReducers<RootReducer>({
    auth: authReducer
});

export { rootReducer };
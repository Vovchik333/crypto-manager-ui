import { combineReducers } from "@reduxjs/toolkit";
import { authReducer } from "./auth/auth";
import { portfolioReducer } from "./portfolio/portfolio";

type RootReducer = {
    auth: typeof authReducer;
    portfolio: typeof portfolioReducer;
}

const rootReducer = combineReducers<RootReducer>({
    auth: authReducer,
    portfolio: portfolioReducer
});

export { rootReducer };
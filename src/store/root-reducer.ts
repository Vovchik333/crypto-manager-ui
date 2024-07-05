import { combineReducers } from "@reduxjs/toolkit";
import { authReducer } from "./auth/auth";
import { portfolioReducer } from "./portfolio/portfolio";
import { assetReducer } from "./asset/asset";

type RootReducer = {
    auth: typeof authReducer;
    portfolio: typeof portfolioReducer
    asset: typeof assetReducer;
}

const rootReducer = combineReducers<RootReducer>({
    auth: authReducer,
    portfolio: portfolioReducer,
    asset: assetReducer
});

export { rootReducer };
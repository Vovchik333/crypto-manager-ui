import { combineReducers } from "@reduxjs/toolkit";
import { authReducer } from "./auth";
import { portfolioReducer } from "./portfolio";
import { transactionReducer } from "./transaction";

type RootReducer = {
    auth: typeof authReducer;
    portfolio: typeof portfolioReducer
    transaction: typeof transactionReducer;
};

const rootReducer = combineReducers<RootReducer>({
    auth: authReducer,
    portfolio: portfolioReducer,
    transaction: transactionReducer
});

export { rootReducer };

import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./root-reducer";
import { extraArguments } from "./extra-arguments";

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({
            thunk: {
                extraArgument: extraArguments
            }
        });
    }
});

export { store };
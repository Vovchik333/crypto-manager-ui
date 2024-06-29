import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { Portfolio } from "../../common/types/types";
import { createPortfolio, deletePortfolio, loadPortfolios, updatePortfolio } from "./actions";

type State = {
    portfolios: Portfolio[];
}

const initialState: State = {
    portfolios: []
}

const portfolioSlice = createSlice({
    name: 'portfolio',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addMatcher(
                isAnyOf(loadPortfolios.fulfilled),
                (state, actions) => {
                    state.portfolios = actions.payload;
                }
            )
            .addMatcher(
                isAnyOf(createPortfolio.fulfilled),
                (state, actions) => {
                    state.portfolios.push(actions.payload);
                }
            )
            .addMatcher(
                isAnyOf(updatePortfolio.fulfilled),
                (state, actions) => {
                    const { portfolios } = state;
                    const index: number = portfolios.findIndex(portfolio => portfolio.id === actions.payload.id);

                    if (index !== -1) {
                        state.portfolios = [
                            ...portfolios.slice(0, index),
                            actions.payload,
                            ...portfolios.slice(index + 1, portfolios.length)
                        ];
                    }
                }
            )
            .addMatcher(
                isAnyOf(deletePortfolio.fulfilled),
                (state, actions) => {
                    const { portfolios } = state;
                    const index: number = portfolios.findIndex(portfolio => portfolio.id === actions.payload);

                    if (index !== -1) {
                        state.portfolios = [
                            ...portfolios.slice(0, index),
                            ...portfolios.slice(index + 1, portfolios.length)
                        ];
                    }
                }
            );
    }
});

export { portfolioSlice };

import { 
    createSlice, 
    isAnyOf 
} from "@reduxjs/toolkit";
import { Portfolio } from "@/common/types";
import { 
    createPortfolio, 
    deleteAsset, 
    deletePortfolio, 
    getPortfolio, 
    loadPortfolios, 
    updatePortfolio 
} from "./actions";

type State = {
    portfolios: Portfolio[];
    isLoaded: boolean;
}

const initialState: State = {
    portfolios: [],
    isLoaded: false
}

const portfolioSlice = createSlice({
    name: 'portfolio',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(
                loadPortfolios.pending,
                (state) => {
                    state.isLoaded = false;
                }
            )
            .addMatcher(
                isAnyOf(loadPortfolios.fulfilled),
                (state, action) => {
                    state.portfolios = action.payload;
                    state.isLoaded = true;
                }
            )
            .addMatcher(
                isAnyOf(createPortfolio.fulfilled),
                (state, action) => {
                    state.portfolios.push(action.payload);
                }
            )
            .addMatcher(
                isAnyOf(updatePortfolio.fulfilled, getPortfolio.fulfilled, deleteAsset.fulfilled),
                (state, action) => {
                    const { portfolios } = state;
                    const index: number = portfolios.findIndex(portfolio => portfolio._id === action.payload._id);

                    if (index !== -1) {
                        state.portfolios = [
                            ...portfolios.slice(0, index),
                            action.payload,
                            ...portfolios.slice(index + 1, portfolios.length)
                        ];
                    }
                }
            )
            .addMatcher(
                isAnyOf(deletePortfolio.fulfilled),
                (state, action) => {
                    const { portfolios } = state;
                    const index: number = portfolios.findIndex(portfolio => portfolio._id === action.payload);

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

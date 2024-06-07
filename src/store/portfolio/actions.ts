import { createAsyncThunk } from "@reduxjs/toolkit";
import { Portfolio } from "../../common/types/portfolio/portfolio.type";
import { AsyncThunkConfig } from "../../common/types/store/async-thunk-config.type";
import { ActionType } from "./common";

const loadPortfolios = createAsyncThunk<
    Portfolio[],
    void,
    AsyncThunkConfig
>(  
    ActionType.GET_ALL,
    async (_payload, { extra: { portfolioService } }) => {
        const result = await portfolioService.getAll();
        
        return result;
    }
);

const createPortfolio = createAsyncThunk<
    Portfolio,
    Portfolio,
    AsyncThunkConfig
>(  
    ActionType.CREATE,
    async (payload, { extra: { portfolioService } }) => {
        const result = await portfolioService.create(payload);
        
        return result;
    }
);

const deletePortfolio = createAsyncThunk<
    string,
    string,
    AsyncThunkConfig
>(  
    ActionType.DELETE,
    async (payload, { extra: { portfolioService } }) => {
        const result = await portfolioService.deleteOne(payload);
        
        return result;
    }
);

export {
    loadPortfolios,
    createPortfolio,
    deletePortfolio
}
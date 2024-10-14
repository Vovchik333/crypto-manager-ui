import { createAsyncThunk } from "@reduxjs/toolkit";
import { Portfolio, PortfolioRequestData } from "@/common/types";
import { AsyncThunkConfig } from "@/common/types";
import { ActionType } from "./common";

const loadPortfolios = createAsyncThunk<
    Portfolio[],
    undefined,
    AsyncThunkConfig
>(  
    ActionType.GET_ALL,
    async (_payload, { extra: { portfolioService } }) => {
        const portfolios = await portfolioService.getByUserId();
        
        return portfolios;
    }
);

const getPortfolio = createAsyncThunk<
    Portfolio,
    string,
    AsyncThunkConfig
>(  
    ActionType.GET_ONE,
    async (payload, { extra: { portfolioService } }) => {
        const portfolio = await portfolioService.getOne(payload);
        
        return portfolio;
    }
);

const createPortfolio = createAsyncThunk<
    Portfolio,
    PortfolioRequestData,
    AsyncThunkConfig
>(  
    ActionType.CREATE,
    async (payload, { extra: { portfolioService } }) => {
        const portfolio = await portfolioService.create(payload);
        
        return portfolio;
    }
);

const updatePortfolio = createAsyncThunk<
    Portfolio,
    Partial<Portfolio>,
    AsyncThunkConfig
>(  
    ActionType.UPDATE,
    async (payload, { extra: { portfolioService } }) => {
        const { _id, ...portfolioPayload } = payload as Portfolio;
        const portfolio = await portfolioService.updateOne(_id, portfolioPayload);
        
        return portfolio;
    }
);

const deletePortfolio = createAsyncThunk<
    string,
    string,
    AsyncThunkConfig
>(  
    ActionType.DELETE,
    async (id, { extra: { portfolioService } }) => {
        const portfolioId = (await portfolioService.deleteOne(id))._id;
        
        return portfolioId;
    }
);

const deleteAsset = createAsyncThunk<
    Portfolio,
    string,
    AsyncThunkConfig
>(  
    ActionType.DELETE_ASSET,
    async (id, { extra: { portfolioService, assetService } }) => {
        const asset = await assetService.deleteOne(id);
        const portfolio = await portfolioService.getOne(asset.portfolioId);
        
        return portfolio;
    }
);

export {
    loadPortfolios,
    getPortfolio,
    createPortfolio,
    updatePortfolio,
    deletePortfolio,
    deleteAsset
}
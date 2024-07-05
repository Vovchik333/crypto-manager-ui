import { createAsyncThunk } from "@reduxjs/toolkit";
import { 
    Asset, 
    AssetWithTransaction, 
    AsyncThunkConfig
} from "../../common/types/types";
import { ActionType } from "./common";

const loadAssets = createAsyncThunk<
    Asset[],
    void,
    AsyncThunkConfig
>(
    ActionType.GET_ALL,
    async (_payload, { extra: { assetService } }) => {
        const asset = assetService.getAll();

        return asset;
    }
);

const createAsset = createAsyncThunk<
    AssetWithTransaction,
    AssetWithTransaction,
    AsyncThunkConfig
>(
    ActionType.ADD,
    async (payload, { extra: { assetService } }) => {
        const asset = assetService.create(payload);

        return asset;
    }
);

const addTransaction = createAsyncThunk<
    AssetWithTransaction,
    AssetWithTransaction,
    AsyncThunkConfig
>(
    ActionType.ADD_TRANSACTION,
    async (payload, { extra: { assetService } }) => {
        const assetWithTransaction = assetService.addTransaction(payload);

        return assetWithTransaction;
    }
);

export { 
    loadAssets,
    createAsset,
    addTransaction 
};

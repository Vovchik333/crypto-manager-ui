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
    Partial<AssetWithTransaction>,
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

const updateTransaction = createAsyncThunk<
    AssetWithTransaction,
    AssetWithTransaction,
    AsyncThunkConfig
>(
    ActionType.UPDATE_TRANSACTION,
    async (payload, { extra: { assetService } }) => {
        const assetWithTransaction = assetService.updateTransaction(payload);

        return assetWithTransaction;
    }
);

const removeTransaction = createAsyncThunk<
    AssetWithTransaction,
    AssetWithTransaction,
    AsyncThunkConfig
>(
    ActionType.REMOVE_TRANSACTION,
    async (payiload, { extra: { assetService } }) => {
        const assetId = assetService.removeTransaction(payiload);

        return assetId;
    }
);

const deleteAsset = createAsyncThunk<
    string,
    string,
    AsyncThunkConfig
>(
    ActionType.DELETE,
    async (payload, { extra: { assetService } }) => {
        const asset = assetService.deleteOne(payload);

        return asset;
    }
);

export { 
    loadAssets,
    createAsset,
    addTransaction,
    updateTransaction,
    removeTransaction,
    deleteAsset 
};

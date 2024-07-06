import { createAsyncThunk } from "@reduxjs/toolkit";
import { 
    Asset, 
    AssetWithTransaction, 
    AsyncThunkConfig
} from "../../common/types/types";
import { ActionType } from "./common";
import { AssetIdWithTransactionId } from "../../common/types/entities/entities";

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

const updateTransaction = createAsyncThunk<
    AssetWithTransaction,
    Partial<AssetWithTransaction>,
    AsyncThunkConfig
>(
    ActionType.UPDATE_TRANSACTION,
    async (payload, { extra: { assetService } }) => {
        const assetWithTransaction = assetService.updateTransaction(payload);

        return assetWithTransaction;
    }
);

const removeTransaction = createAsyncThunk<
    AssetIdWithTransactionId,
    AssetIdWithTransactionId,
    AsyncThunkConfig
>(
    ActionType.REMOVE_TRANSACTION,
    async (paylload, { extra: { assetService } }) => {
        const assetId = assetService.removeTransaction(paylload);

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

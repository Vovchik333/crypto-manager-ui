import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { Asset } from "../../common/types/types";
import { addTransaction, createAsset, deleteAsset, loadAssets, removeTransaction } from "./actions";

type State = {
    assets: Asset[];
}

const initialState: State = {
    assets: []
}

const assetSlice = createSlice({
    name: 'asset',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addMatcher(
                isAnyOf(loadAssets.fulfilled),
                (state, action) => {
                    state.assets = action.payload;
                }
            )
            .addMatcher(
                isAnyOf(createAsset.fulfilled),
                (state, action) => {
                    const { transaction, ...assetWithoutTransaction } = action.payload;
                    
                    state.assets = [
                        ...state.assets,
                        {
                            ...assetWithoutTransaction,
                            transactions: [transaction]
                        }
                    ];
                }
            )
            .addMatcher(
                isAnyOf(addTransaction.fulfilled),
                (state, action) => {
                    const index = state.assets.findIndex(asset => asset.id === action.payload.id)
                    
                    if (index !== -1) {
                        const { transaction } = action.payload;

                        state.assets[index].transactions = [
                            ...state.assets[index].transactions,
                            transaction
                        ];
                    }
                }
            ).addMatcher(
                isAnyOf(removeTransaction.fulfilled),
                (state, action) => {
                    const { assetId, transactionId } = action.payload
                    const assetIndex = state.assets.findIndex(asset => asset.id === assetId)
                    
                    if (assetIndex !== -1) {
                        const { transactions } = state.assets[assetIndex];
                        const transactionIndex = transactions.findIndex(transaction => transaction.id === transactionId);

                        if (transactionIndex !== -1) {
                            state.assets[assetIndex].transactions = [
                                ...transactions.slice(0, transactionIndex),
                                ...transactions.slice(transactionIndex + 1, transactions.length)
                            ];
                        }
                    }
                }
            )
            .addMatcher(
                isAnyOf(deleteAsset.fulfilled),
                (state, action) => {
                    const assetId = action.payload
                    const index = state.assets.findIndex(asset => asset.id === assetId)
                    
                    if (index !== -1) {
                        state.assets = [
                            ...state.assets.slice(0, index),
                            ...state.assets.slice(index + 1, state.assets.length)
                        ];
                    }
                }
            );
    }
});

export { assetSlice };

import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { Asset } from "../../common/types/types";
import { addTransaction, createAsset, loadAssets } from "./actions";

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
            );
    }
});

export { assetSlice };

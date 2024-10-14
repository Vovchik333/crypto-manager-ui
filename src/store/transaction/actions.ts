import { createAsyncThunk } from "@reduxjs/toolkit";
import { 
    AssetRequestData,
    AsyncThunkConfig, 
    Transaction, 
    TransactionRequestData 
} from "@/common/types";
import { ActionType } from "./common";
import { getPortfolio } from "../portfolio/actions";

const loadTransactions = createAsyncThunk<
    Transaction[],
    Partial<Transaction>,
    AsyncThunkConfig
>(  
    ActionType.GET_ALL,
    async (filter, { extra: { transactionService } }) => {
        const transactions = await transactionService.getByFilter(filter);
        
        return transactions;
    }
);

type AssetAndTransaction = {
    asset: AssetRequestData;
    transaction: TransactionRequestData
}

const createFirstTransaction = createAsyncThunk<
    Transaction,
    AssetAndTransaction,
    AsyncThunkConfig
>(
    ActionType.FIRST_CREATE,
    async (payload, { extra: { transactionService, assetService }, dispatch }) => {
        const { asset: assetPayload, transaction: transactionPayload } = payload;
        
        const asset = await assetService.create(assetPayload);
        const transaction = await transactionService.create({...transactionPayload, assetId: asset._id});

        await dispatch(getPortfolio(transaction.portfolioId));

        return transaction;
    }
);

const createTransaction = createAsyncThunk<
    Transaction,
    TransactionRequestData,
    AsyncThunkConfig
>(
    ActionType.CREATE,
    async (payload, { extra: { transactionService }, dispatch }) => {
        const transaction = await transactionService.create(payload);

        await dispatch(getPortfolio(transaction.portfolioId));

        return transaction;
    }
);

const updateTransaction = createAsyncThunk<
    Transaction,
    Transaction,
    AsyncThunkConfig
>(
    ActionType.UPDATE,
    async (payload, { extra: { transactionService }, dispatch }) => {
        const { _id, ...transactionPayload } = payload;
        const transaction = await transactionService.updateOne(_id, transactionPayload);

        await dispatch(getPortfolio(transaction.portfolioId));

        return transaction;
    }
);

const deleteTransaction = createAsyncThunk<
    string,
    string,
    AsyncThunkConfig
>(
    ActionType.DELETE,
    async (id, { extra: { transactionService }, dispatch }) => {
        const transaction = await transactionService.deleteOne(id);

        await dispatch(getPortfolio(transaction.portfolioId));

        return transaction._id;
    }
);

const deleteLastTransaction = createAsyncThunk<
    string,
    Transaction,
    AsyncThunkConfig
>(
    ActionType.LAST_DELETE,
    async (payload, { extra: { assetService }, dispatch }) => {
        const asset = await assetService.deleteOne(payload.assetId);

        await dispatch(getPortfolio(asset.portfolioId));

        return payload._id;
    }
);

export { 
    loadTransactions,
    createTransaction,
    updateTransaction,
    deleteTransaction,
    createFirstTransaction,
    deleteLastTransaction
};

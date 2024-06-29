import { createAsyncThunk } from "@reduxjs/toolkit";
import { 
    AsyncThunkConfig, 
    Transaction 
} from "../../common/types/types";
import { TransactionAction } from "./common";

const getAllTransactions = createAsyncThunk<
    Transaction[],
    void,
    AsyncThunkConfig
>(
    TransactionAction.GET_ALL,
    async (_payload, { extra: { transactionService } }) => {
        const transactions = await transactionService.getAll();

        return transactions;
    }
);

const addTransaction = createAsyncThunk<
    Transaction,
    Transaction,
    AsyncThunkConfig
>(
    TransactionAction.ADD,
    async (payload, { extra: { transactionService } }) => {
        const transaction = await transactionService.create(payload);

        return transaction;
    }
);

const deleteTransaction = createAsyncThunk<
    string,
    string,
    AsyncThunkConfig
>(
    TransactionAction.DELETE,
    async (payload, { extra: { transactionService } }) => {
        const transactionId = await transactionService.deleteOne(payload);

        return transactionId;
    }
);

export {
    getAllTransactions,
    addTransaction,
    deleteTransaction
};

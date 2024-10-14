import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { Transaction } from "@/common/types"
import { 
    createFirstTransaction,
    createTransaction, 
    deleteLastTransaction, 
    deleteTransaction, 
    loadTransactions, 
    updateTransaction 
} from "./actions";

type State = {
    transactions: Transaction[];
    isLoaded: boolean;
};

const initialState: State = {
    transactions: [],
    isLoaded: false
};

const transactionSlice = createSlice({
    name: 'transaction',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(
                loadTransactions.pending,
                (state) => {
                    state.isLoaded = false;
                } 
            )
            .addMatcher(
                isAnyOf(loadTransactions.fulfilled),
                (state, action) => {
                    state.transactions = action.payload
                    state.isLoaded = true;
                }
            )
            .addMatcher(
                isAnyOf(createTransaction.fulfilled, createFirstTransaction.fulfilled),
                (state, action) => {
                    state.transactions = [
                        ...state.transactions,
                        action.payload
                    ]
                }
            )
            .addMatcher(
                isAnyOf(updateTransaction.fulfilled),
                (state, action) => {
                    const { transactions } = state;
                    const index = transactions.findIndex(transaction => transaction._id === action.payload._id);
                    
                    state.transactions = [
                        ...transactions.slice(0, index),
                        action.payload,
                        ...transactions.slice(index + 1, transactions.length)
                    ];
                }
            )
            .addMatcher(
                isAnyOf(deleteTransaction.fulfilled, deleteLastTransaction.fulfilled),
                (state, action) => {
                    const { transactions } = state;
                    const index = transactions.findIndex(transaction => transaction._id === action.payload);

                    state.transactions = [
                        ...transactions.slice(0, index),
                        ...transactions.slice(index + 1, transactions.length)
                    ];
                }
            );
    }
});

export { transactionSlice };

import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { addTransaction, getAllTransactions } from "./actions";
import { Transaction } from "../../common/types/types";
import { deletePortfolio } from "../portfolio/actions";

type State = {
    transactions: Transaction[];
}

const initialState: State = {
    transactions: []
}

const transactionSlice = createSlice({
    name: 'transaction',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addMatcher(
                isAnyOf(getAllTransactions.fulfilled),
                (state, actions) => {
                    state.transactions = actions.payload;
                }
            )
            .addMatcher(
                isAnyOf(addTransaction.fulfilled),
                (state, actions) => {
                    state.transactions = [
                        ...state.transactions,
                        actions.payload
                    ]
                }
            )
            .addMatcher(
                isAnyOf(deletePortfolio.fulfilled),
                (state, actions) => {
                    const { transactions } = state;
                    const index = transactions.findIndex(transaction => transaction.id === actions.payload);
                    
                    if (index !== -1) {
                        state.transactions = [
                            ...transactions.slice(0, index),
                            ...transactions.slice(index + 1, transactions.length)
                        ]
                    };
                }
            );
    }
});

export { transactionSlice };

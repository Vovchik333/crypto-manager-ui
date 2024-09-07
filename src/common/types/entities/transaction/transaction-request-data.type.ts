import { Transaction } from "./transaction.type";

type TransactionRequestData = Omit<Transaction, '_id' | 'createdAt'>;

export { type TransactionRequestData };

import transactionJson from '../../assets/data/transactions.json';
import { Transaction } from '../../common/types/types';

class TransactionService {
    constructor() {};

    public async getAll(): Promise<Transaction[]> {
        const transactions = transactionJson as Transaction[];
        
        return transactions;
    }

    public async create(payload: Transaction): Promise<Transaction> {
        return payload;
    }

    public async deleteOne(id: string) {
        return id;
    }
}

export default TransactionService;

import { Portfolio, Transaction } from "../../common/types/types";
import portfoliosJson from "../../assets/data/portfolios.json";
import transactionsJson from "../../assets/data/transactions.json";

class PortfolioService {
    constructor() {}

    public async getAll(): Promise<Portfolio[]> {
        const portfolios = portfoliosJson as Portfolio[];
        portfolios[0].assets[0].transactions = transactionsJson as Transaction[];

        return portfolios;
    }

    public async create(payload: Portfolio): Promise<Portfolio | never> {
        payload.id = Math.random().toString();
        return payload;
    }

    public async updateOne(payload: Partial<Portfolio>): Promise<Portfolio | never> {
        return payload as Portfolio;
    }

    public async deleteOne(id: string): Promise<string | never> {
        return id;
    }
}

export default PortfolioService;

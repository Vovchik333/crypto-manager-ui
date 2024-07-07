import { Transaction } from "../entities";

type Asset = {
    id?: string;
    portfolioId: string;
    name: string;
    symbol: string;
    image: string;
    currentPrice: number;
    avgPrice: number;
    currentProfit: number;
    invested: number;
    holdings: number;
    transactions: Transaction[];
};

export { type Asset };
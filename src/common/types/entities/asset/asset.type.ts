import { Transaction } from "../entities";

type Asset = {
    id?: string;
    portfolioId: string;
    name: string;
    symbol: string;
    image: string;
    price: number;
    avgPrice: number;
    currentProfit: number;
    invested: number;
    holdings: number;
    transactions: Transaction[];
};

export { type Asset };
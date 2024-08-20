import { Coin } from "../coin/coin.type";

type Asset = {
    id: string;
    coin: Omit<Coin, 'id'>;
    portfolioId: string;
    avgPrice: number;
    currentProfit: number;
    invested: number;
    holdings: number;
};

export { type Asset };

import { Coin } from "../coin/coin.type";

type Asset = {
    _id: string;
    coin: Coin;
    portfolioId: string;
    avgPrice: number;
    currentProfit: number;
    invested: number;
    holdings: number;
};

export { type Asset };

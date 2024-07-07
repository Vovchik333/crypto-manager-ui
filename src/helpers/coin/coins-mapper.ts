import { Coin } from "../../common/types/types";

const coinsMapper = (coins: any[]): Coin[] => {
    return coins.map(coin => ({
        id: coin.id,
        name: coin.name,
        symbol: coin.symbol.toUpperCase(),
        currentPrice: coin.current_price,
        image: coin.image
    }));
}

export { coinsMapper };

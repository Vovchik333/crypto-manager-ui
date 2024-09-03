import { httpApi } from "@/lib/services/http";
import CoinGeckoService from "./coingecko.service";

const coinGeckoService = new CoinGeckoService({
    apiPath: 'https://api.coingecko.com/api/v3',
    httpApi
});

export { coinGeckoService };

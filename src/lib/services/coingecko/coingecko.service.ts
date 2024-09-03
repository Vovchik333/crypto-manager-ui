import { coinsMapper } from "./helpers";
import { HttpApi } from "@/lib/services/http";
import { type Coin } from "@/common/types";

type Constructor = {
    apiPath: string;
    httpApi: HttpApi;
}

class CoinGeckoService {
    #apiPath: string;
    #httpApi: HttpApi;

    constructor({ apiPath, httpApi }: Constructor) {
        this.#apiPath = apiPath;
        this.#httpApi = httpApi;
    }

    public async getCoins(): Promise<Coin[]> {
        const query = {
            vs_currency: 'usd',
            order: 'market_cap_desc',
            per_page: 250
        };
        const url = `${this.#apiPath}/coins/markets`;

        const coins = await this.#httpApi.load<any[]>(url, {
            query
        });
        
        return coinsMapper(coins);
    };
}

export default CoinGeckoService;

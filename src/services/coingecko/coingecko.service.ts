import { coinsMapper } from "../../helpers/helpers";
import HttpApi from "../http/http-api.service";
import { type Coin } from "../../common/types/types";

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
        const endpoint = '/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250';
        const url = `${this.#apiPath}${endpoint}`;
        const coins = await this.#httpApi.load<any[]>(url);
        
        return coinsMapper(coins);
    };
}

export default CoinGeckoService;

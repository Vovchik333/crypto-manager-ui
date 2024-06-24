import HttpApi from "../http/http-api.service";

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

    public async getCoins<T>(): Promise<T[]> {
        const endpoint = '/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250';
        const url = `${this.#apiPath}${endpoint}`;
        const coins = await this.#httpApi.load<T[]>(url);

        return coins;
    };
}

export default CoinGeckoService;
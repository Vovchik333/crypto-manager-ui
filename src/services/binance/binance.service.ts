import HttpApi from "../http/http-api.service";

type Constructor = {
    apiPath: string;
    httpApi: HttpApi;
}

type TickerPrice = {
    symbol: string;
    price: number;
}

class BinanceService {
    #apiPath: string;
    #httpApi: HttpApi;

    constructor({ apiPath, httpApi }: Constructor) {
        this.#apiPath = apiPath;
        this.#httpApi = httpApi;
    }

    public async getTickerPrices() {
        const endpoint = '/api/v3/ticker/price';
        const url = `${this.#apiPath}${endpoint}`;
        const allTickerPrices = await this.#httpApi.load<TickerPrice[]>(url);

        const usdtTickerPrices = allTickerPrices.filter(tickerPrice => {
            const { symbol } = tickerPrice;

            return symbol.indexOf('USDT', symbol.length - 4) !== -1;
        });

        return usdtTickerPrices;
    };
}

export default BinanceService;
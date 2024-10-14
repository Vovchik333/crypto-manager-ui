import { HttpApi } from "@/lib/services/http";
import { Coin } from "../../common/types";
import { ApiPath } from "@/common/enums";

type Constructor = {
    apiPath: string;
    httpApi: HttpApi;
};

class CoinService {
    #apiPath: string;
    #httpApi: HttpApi;

    constructor({ apiPath, httpApi }: Constructor) {
        this.#apiPath = apiPath;
        this.#httpApi = httpApi;
    }

    public async getAll(): Promise<Coin[]> {
        return this.#httpApi.load<Coin[]>(
            `${this.#apiPath}${ApiPath.COINS}`,
            {
                hasAuth: true
            }
        );
    }
}

export { CoinService };

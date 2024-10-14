import { HttpApi, HttpMethod } from "@/lib/services/http";
import { Portfolio, PortfolioRequestData } from "../../common/types";
import { ApiPath } from "@/common/enums";

type Constructor = {
    apiPath: string;
    httpApi: HttpApi;
}

class PortfolioService {
    #apiPath: string;
    #httpApi: HttpApi;

    constructor({ apiPath, httpApi }: Constructor) {
        this.#apiPath = apiPath;
        this.#httpApi = httpApi;
    }

    public async getByUserId(): Promise<Portfolio[]> {
        return this.#httpApi.load<Portfolio[]>(
            `${this.#apiPath}${ApiPath.PORTFOLIOS}`,
            {
                hasAuth: true
            }
        );
    }

    public async getOne(id: string): Promise<Portfolio> {
        return this.#httpApi.load<Portfolio>(
            `${this.#apiPath}${ApiPath.PORTFOLIOS}/${id}`,
            {
                hasAuth: true
            }
        );
    }

    public async create(payload: PortfolioRequestData): Promise<Portfolio> {
        return this.#httpApi.load<Portfolio>(
            `${this.#apiPath}${ApiPath.PORTFOLIOS}`,
            {
                method: HttpMethod.POST,
                payload: JSON.stringify(payload),
                hasAuth: true
            }
        );
    }

    public async updateOne(id: string, payload: Partial<Portfolio>): Promise<Portfolio> {
        return this.#httpApi.load<Portfolio>(
            `${this.#apiPath}${ApiPath.PORTFOLIOS}/${id}`,
            {
                method: HttpMethod.PUT,
                payload: JSON.stringify(payload),
                hasAuth: true
            }
        );
    }

    public async deleteOne(id: string): Promise<Portfolio> {
        return this.#httpApi.load<Portfolio>(
            `${this.#apiPath}${ApiPath.PORTFOLIOS}/${id}`,
            {
                method: HttpMethod.DELETE,
                hasAuth: true
            }
        );
    }
}

export default PortfolioService;

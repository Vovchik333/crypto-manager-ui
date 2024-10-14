import { HttpApi, HttpMethod } from "@/lib/services/http";
import { Transaction, TransactionRequestData } from "@/common/types";
import { ApiPath } from "@/common/enums";

type Constructor = {
    apiPath: string;
    httpApi: HttpApi;
}

class TransactionService {
    #apiPath: string;
    #httpApi: HttpApi;

    constructor({ apiPath, httpApi }: Constructor) {
        this.#apiPath = apiPath;
        this.#httpApi = httpApi;
    }

    public async getByFilter(filter: Partial<Transaction>): Promise<Transaction[]> {
        return this.#httpApi.load<Transaction[]>(
            `${this.#apiPath}${ApiPath.TRANSACTIONS}`,
            {
                hasAuth: true,
                query: filter
            }
        );
    }

    public async create(payload: TransactionRequestData): Promise<Transaction> {
        return this.#httpApi.load<Transaction>(
            `${this.#apiPath}${ApiPath.TRANSACTIONS}`,
            {
                method: HttpMethod.POST,
                payload: JSON.stringify(payload),
                hasAuth: true
            }
        );
    }

    public async updateOne(id: string, payload: Partial<Transaction>): Promise<Transaction> {
        return this.#httpApi.load<Transaction>(
            `${this.#apiPath}${ApiPath.TRANSACTIONS}/${id}`,
            {
                method: HttpMethod.PUT,
                payload: JSON.stringify(payload),
                hasAuth: true
            }
        );
    }

    public async deleteOne(id: string): Promise<Transaction> {
        return this.#httpApi.load<Transaction>(
            `${this.#apiPath}${ApiPath.TRANSACTIONS}/${id}`,
            {
                method: HttpMethod.DELETE,
                hasAuth: true
            }
        );
    }
}

export default TransactionService;

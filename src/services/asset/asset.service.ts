import { HttpApi, HttpMethod } from "@/lib/services/http";
import { 
    Asset,
    AssetRequestData
} from "@/common/types";
import { ApiPath } from "@/common/enums";

type Constructor = {
    apiPath: string;
    httpApi: HttpApi;
}

class AssetService {
    #apiPath: string;
    #httpApi: HttpApi;

    constructor({ apiPath, httpApi }: Constructor) {
        this.#apiPath = apiPath;
        this.#httpApi = httpApi;
    }

    public async getByFilter(filter: Partial<Asset>): Promise<Asset[]> {
        return this.#httpApi.load<Asset[]>(
            `${this.#apiPath}${ApiPath.ASSETS}`,
            {
                hasAuth: true,
                query: filter
            }
        );
    }

    public async getOne(id: string): Promise<Asset> {
        return this.#httpApi.load<Asset>(
            `${this.#apiPath}${ApiPath.ASSETS}/${id}`,
            {
                hasAuth: true
            }
        );
    } 
    
    public async create(payload: AssetRequestData): Promise<Asset> {
        return this.#httpApi.load<Asset>(
            `${this.#apiPath}${ApiPath.ASSETS}`,
            {
                method: HttpMethod.POST,
                payload: JSON.stringify(payload),
                hasAuth: true
            }
        );
    }

    public async deleteOne(id: string): Promise<Asset> {
        return this.#httpApi.load<Asset>(
            `${this.#apiPath}${ApiPath.ASSETS}/${id}`,
            {
                method: HttpMethod.DELETE,
                hasAuth: true
            }
        );
    }
}

export default AssetService;

import { 
    Asset, 
    AssetWithTransaction, 
    Transaction 
} from "../../common/types/types";
import assetsJson from '../../assets/data/assets.json';

class AssetService {
    constructor() {}

    public async getAll(): Promise<Asset[]> {
        const assets = assetsJson as Asset[];

        return assets;
    }

    public async create(payload: AssetWithTransaction): Promise<AssetWithTransaction> {
        const assetId = Math.random().toString();

        payload.transaction = {
            ...payload.transaction,
            id: Math.random().toString(),
            assetId
        }

        const asset = {
            ...payload,
            
            id: assetId
        } as AssetWithTransaction;

        return asset;
    }

    public async addTransaction(payload: AssetWithTransaction): Promise<AssetWithTransaction> {
        return payload;
    }

    public async removeTransaction(payload: AssetWithTransaction): Promise<AssetWithTransaction> {
        return payload;
    }

    public async deleteOne(id: string): Promise<string> {
        return id;
    }
}

export default AssetService;

import { 
    Asset, 
    AssetWithTransaction
} from "../../common/types/types";

class AssetService {
    constructor() {}

    public async getAll(): Promise<Asset[]> {
        const assets = [] as Asset[];

        return assets;
    }

    public async create(payload: Partial<AssetWithTransaction>): Promise<AssetWithTransaction> {
        const { transaction } = payload as AssetWithTransaction;
        const { quantity, pricePerCoin } = transaction;
        const assetId = Math.random().toString();

        const asset = {
            ...payload,
            id: assetId,
            currentPrice: pricePerCoin,
            avgPrice: pricePerCoin,
            invested: quantity * pricePerCoin,
            holdings: quantity,
            currentProfit: 0.00,
            transaction: {
                ...transaction,
                id: Math.random().toString(),
                assetId
            }
        } as AssetWithTransaction;

        return asset;
    }

    public async addTransaction(payload: AssetWithTransaction): Promise<AssetWithTransaction> {
        const { 
            holdings, 
            invested, 
            transaction: { 
                quantity, 
                pricePerCoin 
            } 
        } = payload;

        const newHoldings = holdings + quantity;
        const newInvested = invested + (quantity * pricePerCoin);

        const asset = {
            ...payload,
            currentPrice: pricePerCoin,
            avgPrice: newInvested / newHoldings,
            invested: newInvested,
            holdings: newHoldings,
            currentProfit: newHoldings * pricePerCoin - newInvested,
            transaction: {
                ...payload.transaction,
                id: Math.random().toString()
            }
        } as AssetWithTransaction;

        return asset;
    }

    public async updateTransaction(payload: Partial<AssetWithTransaction>): Promise<AssetWithTransaction> {
        return payload as AssetWithTransaction;
    }

    public async removeTransaction(payload: AssetWithTransaction): Promise<AssetWithTransaction> {
        const { 
            holdings, 
            currentPrice, 
            invested, 
            transaction: { 
                quantity, 
                pricePerCoin 
            } 
        } = payload;
        
        const asset = {
            ...payload,
            avgPrice: invested / holdings,
            currentPrice: pricePerCoin,
            invested: invested - (quantity * pricePerCoin),
            holdings: holdings - quantity,
            currentProfit: (holdings - quantity) * (currentPrice - pricePerCoin),
        } as AssetWithTransaction;

        return asset;
    }

    public async deleteOne(id: string): Promise<string> {
        return id;
    }
}

export default AssetService;

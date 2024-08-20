import { TransactionRequestData } from "../transaction";
import { Asset } from "./asset.type";

type AssetRequestData = Omit<Asset, 'id' | 'avgPrice' | 'invested' | 'holdings' | 'currentProfit'> & {
    transaction: Omit<TransactionRequestData, 'assetId'>;
};

export { type AssetRequestData };

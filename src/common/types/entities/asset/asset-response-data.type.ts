import { Transaction } from "../transaction";
import { Asset } from "./asset.type";

type AssetResponseData = Asset & {
    transaction: Transaction;
};

export { type AssetResponseData };

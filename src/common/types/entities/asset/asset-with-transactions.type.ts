import { Transaction } from "../entities";
import { Asset } from "./asset.type";

type AssetWithTransaction = Omit<Asset, 'transactions'> & Record<'transaction', Transaction>;

export { type AssetWithTransaction };

import { Asset } from "./asset.type";

type AssetRequestData = Pick<Asset, 'portfolioId'> & {
    coin: string
};

export { type AssetRequestData };

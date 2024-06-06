import { Asset } from "../asset/asset.type";

type Portfolio = {
    id: string;
    name: string;
    totalSum: number;
    assets: Asset[];
};

export { type Portfolio };


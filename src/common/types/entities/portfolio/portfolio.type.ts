import { Asset } from "../asset";

type Portfolio = {
    _id: string;
    userId: string;
    name: string;
    totalSum: number;
    assets: Asset[];
};

export { type Portfolio };


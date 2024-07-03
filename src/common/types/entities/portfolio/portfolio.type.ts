import { Asset } from "../entities";

type Portfolio = {
    id?: string;
    name: string;
    totalSum: number;
    assets: Asset[];
};

export { type Portfolio };


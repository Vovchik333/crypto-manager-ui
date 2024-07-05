import { TransactionType } from "../../../enums/enums";
import { ValueOf } from "../../../generic/generic";

type Transaction = {
    id?: string;
    assetId?: string;
    type: ValueOf<typeof TransactionType>;
    pricePerCoin: number;
    quantity: number;
    createdAt: string;
}

export { type Transaction };

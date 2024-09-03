import { TransactionType } from "../../../enums";
import { ValueOf } from "@/lib/types";

type Transaction = {
    id: string;
    assetId: string;
    type: ValueOf<typeof TransactionType>;
    pricePerCoin: number;
    quantity: number;
    createdAt: string;
}

export { type Transaction };

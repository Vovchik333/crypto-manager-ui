import { useState } from "react";
import clsx from "clsx";
import { useAppDispatch } from "@/lib/hooks";
import { Button } from "@/lib/components";
import { ButtonType } from "@/lib/enums/components";
import { TransactionType } from '@/common/enums';
import { 
    Asset,
    Coin as CoinType, 
    Transaction, 
    TransactionRequestData
} from '@/common/types';
import { createFirstTransaction, createTransaction } from "@/store/transaction/actions";
import styles from './styles.module.scss';
import SCStyles from '../select-coin/styles.module.scss';
import { 
    TransactionPriceInfo, 
    TransactionTotal, 
    TransactionTypeComponent 
} from "../../../transaction-form-components";
import { Coin } from "../select-coin/components";

type Props = {
    portfolioId: string;
    selectedCoin: CoinType;
    assets: Asset[];
    onClose: () => void;
}

const TransactionForm: React.FC<Props> = ({
    portfolioId,
    selectedCoin,
    assets,
    onClose
}) => {
    const dispatch = useAppDispatch();

    const [transaction, setTransaction] = useState<TransactionRequestData>({
        type: TransactionType.BUY,
        quantity: 0.00,
        pricePerCoin: selectedCoin.currentPrice
    } as TransactionRequestData);

    const asset = assets.find(asset => asset.coin.name === selectedCoin.name);
    const totalSumRes = (transaction.pricePerCoin * transaction.quantity);
    const totalSum = isNaN(totalSumRes) ? '0.00' : totalSumRes.toFixed(2);

    const handleChangeType = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTransaction({
            ...transaction,
            type: event.target.value
        });
    }

    const handleChangeQuantity = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTransaction({
            ...transaction,
            quantity: parseFloat(event.target.value)
        });
    }

    const handleChangePricePerCoin = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTransaction({
            ...transaction,
            pricePerCoin: parseFloat(event.target.value)
        });
    }

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        if (asset === undefined) {
            await dispatch(createFirstTransaction({
                asset: {
                    portfolioId,
                    coin: selectedCoin.id
                },
                transaction: {
                    ...transaction,
                    portfolioId,
                }
            }));
        } else {
            const { _id: assetId } = asset;
            await dispatch(createTransaction({ ...transaction, assetId, portfolioId }));
        }

        onClose();
    }

    return (
        <form 
            className={styles['transaction-form']} 
            onSubmit={handleSubmit}
        >
            <TransactionTypeComponent 
                type={transaction.type} 
                onChange={handleChangeType} 
            />
            <div 
                className={clsx(
                    SCStyles['coins__item-content'],
                    styles['transaction-form__selected-coin']
                )}
            >
                <Coin coin={selectedCoin} />
            </div>
            <TransactionPriceInfo 
                transaction={transaction as Transaction} 
                onChangeQuantity={handleChangeQuantity} 
                onChangePricePerCoin={handleChangePricePerCoin} 
            />
            <TransactionTotal totalSum={totalSum} />
            <Button 
                className={styles['transaction-form__submit-button']} 
                type={ButtonType.SUBMIT}
                isPrimary
            >Add</Button>
        </form>
    );
}

export { TransactionForm };

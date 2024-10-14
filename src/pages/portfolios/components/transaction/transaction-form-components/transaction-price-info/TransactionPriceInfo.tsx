import { LabelWithInput } from '@/lib/components';
import { TextInputType } from '@/lib/enums/components';
import { Transaction } from '@/common/types';
import styles from './styles.module.scss';

type Props = {
    transaction: Transaction;
    onChangeQuantity: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onChangePricePerCoin: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const TransactionPriceInfo: React.FC<Props> = ({
    transaction,
    onChangeQuantity,
    onChangePricePerCoin
}) => {
    return (
        <fieldset className={styles['transaction-price-info']}>
            <div className={styles['transaction-price-info__side']}>
                <LabelWithInput 
                    id='transaction-price-info-quantity'
                    type={TextInputType.NUMBER} 
                    name='quantity'
                    placeholder="0.00"
                    value={transaction.quantity}
                    onChange={onChangeQuantity}
                >Quantity:</LabelWithInput>
            </div>
            <div className={styles['transaction-price-info__side']}>
                <LabelWithInput 
                    id='transaction-price-info-price-per-coin'
                    type={TextInputType.NUMBER} 
                    name='pricePerCoin'
                    placeholder="0.00"
                    value={transaction.pricePerCoin}
                    onChange={onChangePricePerCoin}
                >Price per coin:</LabelWithInput>
            </div>
        </fieldset>
    );
};

export { TransactionPriceInfo };

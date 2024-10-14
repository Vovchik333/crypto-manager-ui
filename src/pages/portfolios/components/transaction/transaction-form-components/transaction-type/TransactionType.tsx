import { TransactionType } from "@/common/enums";
import { SelectiveInputType } from '@/lib/enums/components';
import { ValueOf } from "@/lib/types";
import styles from './styles.module.scss';

type Props = {
    type: ValueOf<typeof TransactionType>;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const TransactionTypeComponent: React.FC<Props> = ({
    type,
    onChange
}) => {
    return (
        <fieldset className={styles['transaction-type']}>
            <input 
                id='transaction-buy' 
                className={styles['transaction-type__input']}
                type={SelectiveInputType.RADIO} 
                name='transactionType'
                value={TransactionType.BUY}
                checked={type === TransactionType.BUY}
                onChange={onChange}
            />
            <label 
                className={styles['transaction-type__label']} 
                htmlFor='transaction-buy'
            >Buy</label>
            <input 
                id='transaction-sell' 
                className={styles['transaction-type__input']}
                type={SelectiveInputType.RADIO} 
                name='transactionType'
                value={TransactionType.SELL}
                checked={type === TransactionType.SELL}
                onChange={onChange}
            />
            <label 
                className={styles['transaction-type__label']} 
                htmlFor='transaction-sell'
            >Sell</label>
            <input 
                id='transaction-transfer' 
                className={styles['transaction-type__input']}
                type={SelectiveInputType.RADIO} 
                name='transactionType'
                value={TransactionType.TRANSFER}
                checked={type === TransactionType.TRANSFER}
                onChange={onChange}
            />
            <label 
                className={styles['transaction-type__label']} 
                htmlFor='transaction-transfer'
            >Transfer</label>
        </fieldset>
    );
};

export { TransactionTypeComponent };

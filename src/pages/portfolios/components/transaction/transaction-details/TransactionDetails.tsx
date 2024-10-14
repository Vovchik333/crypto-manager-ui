import { Asset, Transaction } from '@/common/types';
import { FormTemplate } from '@/lib/components';
import styles from './styles.module.scss';

type Props = {
    asset: Asset;
    transaction: Transaction;
    onClose: () => void;
}

type TransactionKeys = 'Type' | 'Date' | 'Name' | 'Symbol' | 'Price per coin' | 'Quantity' | 'Total';

const TransactionDetails: React.FC<Props> = ({
    asset,
    transaction,
    onClose
}) => {
    const { coin: { name, symbol } } = asset;
    const { type, createdAt, pricePerCoin, quantity } = transaction;
    
    const rowData = {
        'Type': type, 
        'Date': new Date(createdAt).toDateString(), 
        'Name': name,
        'Symbol': symbol,
        'Price per coin': `$${pricePerCoin}`,
        'Quantity': `${quantity} ${symbol}`, 
        'Total': `$${pricePerCoin * quantity}`
    };
    
    return (
        <FormTemplate 
            topic='Transaction details' 
            onClose={onClose}
        >
            <ul className={styles['transaction-details']}>
                {Object.keys(rowData).map((key, index) => {
                    return (
                        <li 
                            key={index}
                            className={styles['transaction-details__item']}
                        >
                            <span className={styles['transaction-details__item-feature']}>{key}</span>
                            <span className={styles['transaction-details__item-value']}>{rowData[key as TransactionKeys]}</span>
                        </li>
                    );
                })}
            </ul>
        </FormTemplate>
    );
}

export { TransactionDetails };

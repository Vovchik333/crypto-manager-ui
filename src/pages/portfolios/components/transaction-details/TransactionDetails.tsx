import { Asset, Transaction } from '../../../../common/types/types';
import { FormTemplate } from '../../../../components/components';
import './TransactionDetails.css';

type Props = {
    asset: Asset;
    transaction: Transaction;
    onClose: React.MouseEventHandler<HTMLButtonElement>;
}

type TransactionKeys = 'Type' | 'Date' | 'Name' | 'Symbol' | 'Price per coin' | 'Quantity' | 'Total';

const TransactionDetails: React.FC<Props> = ({
    asset,
    transaction,
    onClose
}) => {
    const { name, symbol } = asset;
    const { type, createdAt, pricePerCoin, quantity } = transaction;
    
    const rowData = {
        'Type': type, 
        'Date': createdAt, 
        'Name': name,
        'Symbol': symbol,
        'Price per coin': `$${pricePerCoin}`,
        'Quantity': `${quantity} ${symbol}`, 
        'Total': `$${pricePerCoin * quantity}`
    };
    
    return (
        <FormTemplate topic='Transaction details' onClose={onClose}>
            <ul className='transaction-details'>
                {Object.keys(rowData).map((key, index) => {
                    return (
                        <li 
                            key={index}
                            className='transaction-details__item'
                        >
                            <span className='transaction-details__item-feature'>{key}</span>
                            <span className='transaction-details__item-value'>{rowData[key as TransactionKeys]}</span>
                        </li>
                    );
                })}
            </ul>
        </FormTemplate>
    );
}

export { TransactionDetails };

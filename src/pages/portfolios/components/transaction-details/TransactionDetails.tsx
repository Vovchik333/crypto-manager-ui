import { Transaction } from '../../../../common/types/types';
import { FormTemplate } from '../../../../components/components';
import './TransactionDetails.css';

type Props = {
    transaction: Transaction;
    onClose: React.MouseEventHandler<HTMLButtonElement>;
}

type TransactionKeys = 'Type' | 'Date' | 'Price per coin' | 'Quantity' | 'Total';

const TransactionDetails: React.FC<Props> = ({
    transaction,
    onClose
}) => {
    const { type, createdAt, pricePerCoin, quantity, symbol } = transaction;
    const rowData = {
        'Type': type, 
        'Date': createdAt, 
        'Price per coin': `$${pricePerCoin}`,
        'Quantity': `${quantity} ${symbol}`, 
        'Total': `$${pricePerCoin * quantity}`
    };
    

    return (
        <FormTemplate topic='Transaction details' onClose={onClose}>
            <ul className='transaction-details'>
                {Object.keys(rowData).map(key => {
                    return (
                        <li className='transaction-details__item'>
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

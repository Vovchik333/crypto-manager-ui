import { ChangeEvent, useState } from 'react';
import { ButtonType } from '@/lib/enums/components';
import { Transaction } from '@/common/types';
import { Button, FormTemplate } from '@/lib/components';
import { useAppDispatch } from '@/lib/hooks';
import { updateTransaction } from '@/store/transaction/actions';
import { TransactionPriceInfo, TransactionTotal } from '../transaction-form-components';
import styles from './styles.module.scss';

type Props = {
    transaction: Transaction;
    onClose: () => void;
};

const UpdateTransaction: React.FC<Props> = ({
    transaction,
    onClose
}) => {
    const dispatch = useAppDispatch();

    const [updatedTransaction, setUpdatedTransaction] = useState<Transaction>({
        quantity: transaction.quantity,
        pricePerCoin: transaction.pricePerCoin
    } as Transaction);

    const totalSumRes = updatedTransaction.pricePerCoin * updatedTransaction.quantity;
    const totalSum = isNaN(totalSumRes) ? '0.00' : totalSumRes.toFixed(2);

    const handleChangeQuantity = (event: ChangeEvent<HTMLInputElement>) => {
        setUpdatedTransaction(prev => ({
            ...prev,
            quantity: parseFloat(event.target.value)
        }));
    }

    const handleChangePricePerCoin = (event: ChangeEvent<HTMLInputElement>) => {
        setUpdatedTransaction(prev => ({
            ...prev,
            pricePerCoin: parseFloat(event.target.value)
        }));
    }

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        dispatch(updateTransaction({
            ...updatedTransaction,
            _id: transaction._id
        }));

        onClose();
    }

    return (
        <FormTemplate topic='Edit transaction' onClose={onClose}>
            <form 
                className={styles['transaction-form']} 
                onSubmit={handleSubmit}
            >
                <TransactionPriceInfo 
                    transaction={updatedTransaction}
                    onChangeQuantity={handleChangeQuantity}
                    onChangePricePerCoin={handleChangePricePerCoin}
                />
                <TransactionTotal totalSum={totalSum} />
                <Button 
                    className={styles['transaction-form__submit-button']} 
                    type={ButtonType.SUBMIT}
                    isPrimary
                >Edit</Button>
            </form>
        </FormTemplate>
    );
};

export { UpdateTransaction };

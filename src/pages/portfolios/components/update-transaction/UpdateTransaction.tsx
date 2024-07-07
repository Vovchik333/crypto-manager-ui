import { ChangeEvent, useState } from 'react';
import { ButtonType, InputType } from '../../../../common/enums/enums';
import { Transaction } from '../../../../common/types/types';
import { Button, FormTemplate, Input } from '../../../../components/components';
import { useAppDispatch } from '../../../../hooks/hooks';
import { AssetWithTransaction } from '../../../../common/types/entities/entities';
import { updateTransaction } from '../../../../store/asset/actions';
import '../add-transaction/components/transaction-form/TransactionForm.css';

type Props = {
    asset: AssetWithTransaction;
    onClose: () => void;
};

const UpdateTransaction: React.FC<Props> = ({
    asset,
    onClose
}) => {
    const dispatch = useAppDispatch();

    const [updatedTransaction, setUpdatedTransaction] = useState<Pick<Transaction, 'pricePerCoin' | 'quantity'>>({
        quantity: asset.transaction.quantity,
        pricePerCoin: asset.transaction.pricePerCoin
    });

    const totalSumRes = (updatedTransaction.pricePerCoin * updatedTransaction.quantity);
    const totalSum = isNaN(totalSumRes) ? '0.00' : totalSumRes.toFixed(2);

    const handleOnChangeQuantity = (event: ChangeEvent<HTMLInputElement>) => {
        const quantityValue = parseFloat(event.target.value);

        setUpdatedTransaction({
            ...updatedTransaction,
            quantity: quantityValue
        });
    }

    const handleOnChangePricePerCoin = (event: ChangeEvent<HTMLInputElement>) => {
        setUpdatedTransaction({
            ...updatedTransaction,
            pricePerCoin: parseFloat(event.target.value)
        });
    }

    const handleOnSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        const { quantity, pricePerCoin } = updatedTransaction;
        dispatch(updateTransaction({
            ...asset,
            transaction: {
                ...asset.transaction,
                quantity,
                pricePerCoin
            }
        }));
        onClose();
    }


    return (
        <FormTemplate topic='Edit transaction' onClose={onClose}>
            <form className='transaction-form' onSubmit={handleOnSubmit}>
                <fieldset className='transaction-form__price-info'>
                    <div className='transaction-form__side'>
                        <label 
                            className='transaction-form__price-info-label' 
                            htmlFor="transaction-quantity"
                        >Quantity:</label>
                        <Input 
                            id='transaction-quantity'
                            className='input transaction-form__price-info-input' 
                            type={InputType.NUMBER} 
                            placeholder="0.00"
                            value={updatedTransaction.quantity}
                            onChange={handleOnChangeQuantity}
                        />
                    </div>
                    <div className='transaction-form__side'>
                        <label 
                            className='transaction-form__price-info-label'
                            htmlFor="transaction-price-per-coin"
                        >Price per coin:</label>
                        <Input 
                            id='transaction-price-per-coin'
                            className='input transaction-form__price-info-input' 
                            type={InputType.NUMBER} 
                            value={updatedTransaction.pricePerCoin}
                            onChange={handleOnChangePricePerCoin}
                        />
                    </div>
                </fieldset>
                <div className="transaction-form__total">
                    <h4 className="transaction-form__total-header">Total: </h4>
                    <p className="transaction-form__total-price">{`$ ${totalSum}`}</p>
                </div>
                <Button 
                    className='button primary-button transaction-form__submit-button' 
                    type={ButtonType.SUBMIT}
                >Edit</Button>
            </form>
        </FormTemplate>
    );
};

export { UpdateTransaction };

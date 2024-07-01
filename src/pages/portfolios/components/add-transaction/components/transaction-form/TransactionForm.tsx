import { 
    ChangeEvent, 
    useState 
} from "react";
import { useAppDispatch } from "../../../../../../hooks/hooks";
import { 
    Button, 
    Input 
} from "../../../../../../components/components";
import { 
    ButtonType, 
    InputType, 
    TransactionType 
} from "../../../../../../common/enums/enums";
import { 
    Coin, 
    Transaction 
} from '../../../../../../common/types/types';
import { addTransaction } from "../../../../../../store/transaction/actions";
import './TransactionForm.css';

type Props = {
    coins: Coin[];
    selectedCoin: Coin;
}

const TransactionForm: React.FC<Props> = ({
    selectedCoin,
}) => {
    const dispatch = useAppDispatch();

    const [transaction, setTransaction] = useState<Transaction>({
        symbol: selectedCoin.symbol,
        type: TransactionType.BUY,
        quantity: 0.00,
        pricePerCoin: selectedCoin.price,
        createdAt: (new Date()).toDateString()
    });

    const totalSumRes = (transaction.pricePerCoin * transaction.quantity);
    const totalSum = isNaN(totalSumRes) ? '0.00' : totalSumRes.toFixed(2);

    const handleOnChangeType = (event: ChangeEvent<HTMLInputElement>) => {
        setTransaction({
            ...transaction,
            type: event.target.value
        });
    }

    const handleOnChangeQuantity = (event: ChangeEvent<HTMLInputElement>) => {
        const quantityValue = parseFloat(event.target.value);

        setTransaction({
            ...transaction,
            quantity: quantityValue
        });
        
    }

    const handleOnChangePricePerCoin = (event: ChangeEvent<HTMLInputElement>) => {
        setTransaction({
            ...transaction,
            pricePerCoin: parseFloat(event.target.value)
        });
    }

    const handleOnSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        await dispatch(addTransaction(transaction));
    }

    return (
        <form className='transaction-form' onSubmit={handleOnSubmit}>
            <fieldset className='transaction-form__type'>
                <Input 
                    id='transaction-buy' 
                    className='transaction-form__type-input'
                    type={InputType.RADIO} 
                    name='transactionType'
                    value={TransactionType.BUY}
                    checked={transaction.type === TransactionType.BUY}
                    onChange={handleOnChangeType}
                />
                <label 
                    className='transaction-form__type-label' 
                    htmlFor='transaction-buy'
                >Buy</label>
                <Input 
                    id='transaction-sell' 
                    className='transaction-form__type-input'
                    type={InputType.RADIO} 
                    name='transactionType'
                    value={TransactionType.SELL}
                    checked={transaction.type === TransactionType.SELL}
                    onChange={handleOnChangeType}
                />
                <label 
                    className='transaction-form__type-label' 
                    htmlFor='transaction-sell'
                >Sell</label>
                <Input 
                    id='transaction-transfer' 
                    className='transaction-form__type-input'
                    type={InputType.RADIO} 
                    name='transactionType'
                    value={TransactionType.TRANSFER}
                    checked={transaction.type === TransactionType.TRANSFER}
                    onChange={handleOnChangeType}
                />
                <label 
                    className='transaction-form__type-label' 
                    htmlFor='transaction-transfer'
                >Transfer</label>
            </fieldset>
            <div className="coins__item-content transaction-form__selected-coin">
                <img className="coins__item-image" src={selectedCoin.image} alt="Coin image" />
                <span>{`${selectedCoin.name} ${selectedCoin.symbol.toUpperCase()}`}</span>
            </div>
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
                        value={transaction.quantity}
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
                        value={transaction.pricePerCoin}
                        onChange={handleOnChangePricePerCoin}
                    />
                </div>
            </fieldset>
            <div className="transaction-form__total">
                <h4 className="transaction-form__total-header">Total: </h4>
                <p className="transaction-form__total-price">{`$ ${totalSum}`}</p>
            </div>
            <Button 
                className='button transaction-form__submit-button' 
                type={ButtonType.SUBMIT}
            >Add</Button>
        </form>
    );
}

export { TransactionForm };

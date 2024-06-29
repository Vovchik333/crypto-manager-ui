import { 
    useEffect, 
    useState 
} from 'react';
import { 
    FormTemplate
} from '../../../../components/components';
import { coinGeckoService } from '../../../../services/services';
import { Coin } from '../../../../common/types/types';
import { 
    SelectCoin, 
    TransactionForm 
} from './components/components';

type Props = {
    onClose: () => void;
}
const AddTransaction: React.FC<Props> = ({
    onClose
}) => {
    const [coins, setCoins] = useState<Coin[] | null>(null);
    const [selectedCoinId, setSelectedCoinId] = useState<string>('');
    const [isSelectedCoin, setIsSelectedCoin] = useState<boolean>(false);

    const selectedCoin = coins?.find(coin => coin.id === selectedCoinId) as Coin;

    const handleOnSelectCoin = (id: string) => {
        return () => {
            setSelectedCoinId(id);
            setIsSelectedCoin(true);
        }
    }

    useEffect(() => {
        coinGeckoService.getCoins()
            .then(coins => {
                setCoins(coins as Coin[]);
            })
    }, []);

    if (coins === null) {
        return <></>;
    }

    return (
        isSelectedCoin ? (
            <FormTemplate topic='Add Transaction' onClose={onClose}>
                <TransactionForm 
                    coins={coins} 
                    selectedCoin={selectedCoin}          
                />
            </FormTemplate>
        ) : (
            <FormTemplate topic='Select Coin' onClose={onClose}>
                <SelectCoin
                    coins={coins} 
                    onSelectCoin={handleOnSelectCoin}
                />
            </FormTemplate>  
        )
    );
}

export { AddTransaction };

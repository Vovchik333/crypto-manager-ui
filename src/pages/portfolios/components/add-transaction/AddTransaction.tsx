import { 
    useEffect, 
    useState 
} from 'react';
import { 
    FormTemplate,
    Spinner
} from '../../../../components/components';
import { coinGeckoService } from '../../../../services/services';
import { 
    Asset, 
    Coin 
} from '../../../../common/types/types';
import { 
    SelectCoin, 
    TransactionForm 
} from './components/components';

type Props = {
    portfolioId: string;
    assets: Asset[];
    onClose: () => void;
}
const AddTransaction: React.FC<Props> = ({
    portfolioId,
    assets,
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
            });
    }, []);

    if (coins === null) {
        return (<Spinner />);
    }

    return (
        isSelectedCoin ? (
            <FormTemplate topic='Add Transaction' onClose={onClose}>
                <TransactionForm 
                    portfolioId={portfolioId}
                    assets={assets}
                    selectedCoin={selectedCoin}      
                    onClose={onClose}    
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

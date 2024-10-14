import { useEffect, useState } from 'react';
import { FormTemplate, Spinner } from '@/lib/components';
import { Coin, Portfolio } from '@/common/types';
import { SelectCoin, TransactionForm } from './components/components';
import { coinService } from '@/services';
import styles from './styles.module.scss';

type Props = {
    portfolio: Portfolio;
    onClose: () => void;
};

type CoinsState = {
    coins: Coin[],
    isLoaded: boolean 
};

const AddTransaction: React.FC<Props> = ({
    portfolio,
    onClose
}) => {
    const [coinsFromApi, setCoinsFromApi] = useState<CoinsState>({
        coins: [],
        isLoaded: false 
    });
    const [selectedCoinId, setSelectedCoinId] = useState<string | null>(null);

    const { coins, isLoaded } = coinsFromApi;
    const { assets, _id: portfolioId } = portfolio;
    const selectedCoin = (coins as Coin[]).find(coin => coin.id === selectedCoinId);
    const isCoinSelected = selectedCoin !== undefined;

    const handleSelectCoin = (id: string): void => setSelectedCoinId(id);

    useEffect(() => {
        (async () => {
            const coins = await coinService.getAll();
            setCoinsFromApi({
                coins,
                isLoaded: true
            });
        })();
    }, []);

    if (!isLoaded) {
        return (<Spinner />);
    }

    return (
        <FormTemplate 
            className={styles['add-transaction-template']}
            topic={isCoinSelected ? 'Add transaction' : 'Select coin'}
            onClose={onClose}
        >
            {isCoinSelected ? (
                <TransactionForm 
                    portfolioId={portfolioId}
                    selectedCoin={selectedCoin as Coin}  
                    assets={assets}
                    onClose={onClose}    
                />
            ) : (
                <SelectCoin
                    coins={coins}
                    onSelectCoin={handleSelectCoin}
                />
            )}
        </FormTemplate>
    );
}

export { AddTransaction };

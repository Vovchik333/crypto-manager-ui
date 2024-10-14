import { ChangeEvent, useState } from "react";
import { IconName } from "@/lib/enums/components";
import { Icon, Input } from "@/lib/components";
import { Coin as CoinType } from '@/common/types';
import { Coin } from "./components";
import styles from './styles.module.scss';

type Props = {
    coins: CoinType[];
    onSelectCoin: (id: string) => void;
}

const SelectCoin: React.FC<Props> = ({
    coins,
    onSelectCoin
}) => {
    const [coinName, setCoinName] = useState<string>('');
    const filteredCoins = coins.filter(coin => `${coin.name} ${coin.symbol}`.toUpperCase().includes(coinName.toUpperCase())) as CoinType[];
    
    const handleChangeCoinName = (event: ChangeEvent<HTMLInputElement>) => {
        setCoinName(event.target.value);
    }

    return (
        <div className={styles['select-coin-form']}>
            <>
                <Input 
                    placeholder='Search' 
                    value={coinName} 
                    onChange={handleChangeCoinName}
                /> 
                <ul className={styles.coins}>
                    {filteredCoins.map(coin => {
                        return (
                            <li 
                                className={styles.coins__item}
                                key={coin.id} 
                                onClick={() => onSelectCoin(coin.id)}
                            >
                                <Coin coin={coin}/>
                                <Icon name={IconName.NEXT} />
                            </li>
                        );
                    })}
                </ul> 
            </>
        </div>
    );
}

export { SelectCoin };

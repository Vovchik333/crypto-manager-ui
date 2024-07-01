import { ChangeEvent, useState } from "react";
import { IconName } from "../../../../../../common/enums/enums";
import { Icon, Input } from "../../../../../../components/components";
import { Coin } from '../../../../../../common/types/types';
import './SelectCoin.css';

type Props = {
    coins: Coin[];
    onSelectCoin: (id: string) => () => void;
}

const SelectCoin: React.FC<Props> = ({
    coins,
    onSelectCoin
}) => {
    const [coinName, setCoinName] = useState<string>('');

    const filteredCoins = coins?.filter(coin => `${coin.name} ${coin.symbol}`.toUpperCase().includes(coinName.toUpperCase())) as Coin[];
    
    const handleOnChangeCoinName = (event: ChangeEvent<HTMLInputElement>) => {
        setCoinName(event.target.value);
    }

    return (
        <>
            <Input 
                className='input' 
                placeholder='Search' 
                value={coinName} 
                onChange={handleOnChangeCoinName}
            /> 
            <ul className='coins'>
                {filteredCoins?.map(coin => {
                    return (
                        <li 
                            className='coins__item'
                            key={coin.id} 
                            onClick={onSelectCoin(coin.id)}
                        >
                            <div className='coins__item-content'>
                                <img className='coins__item-image' src={coin.image} alt="Coin image" />
                                <span>{`${coin.name} ${coin.symbol.toUpperCase()}`}</span>
                            </div>
                            <Icon name={IconName.NEXT} />
                        </li>
                    );
                })}
            </ul>  
        </>
    );
}

export { SelectCoin };

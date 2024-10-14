import { Coin as CoinType } from '@/common/types';
import styles from './styles.module.scss';

type Props = {
    coin: CoinType;
};

const Coin: React.FC<Props> = ({
    coin
}) => {
    return (
        <div className={styles['coin']}>
            <img 
                className={styles['coin__image']} 
                src={coin.image} 
                alt="Coin image" 
            />
            <span>{`${coin.name} ${coin.symbol}`}</span>
        </div>
    );
};

export { Coin };

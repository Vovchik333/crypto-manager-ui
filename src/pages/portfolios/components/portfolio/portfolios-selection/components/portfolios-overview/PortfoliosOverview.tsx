import { InfoBlock } from '@/lib/components';
import styles from './styles.module.scss';
import { Portfolio } from '@/common/types';

type Props = {
    portfolios: Portfolio[];
}

const PortfoliosOverview: React.FC<Props> = ({
    portfolios
}) => {
    const totalSum = portfolios.reduce((acc, cur) => acc + cur.totalSum, 0);

    return (
        <section 
            className={styles['portfolios-selection__overview']}
        >
            <InfoBlock 
                topRow={'Overview'} 
                bottomRow={`$${totalSum.toFixed(2)}`}
            />
        </section>
    );
}

export { PortfoliosOverview };

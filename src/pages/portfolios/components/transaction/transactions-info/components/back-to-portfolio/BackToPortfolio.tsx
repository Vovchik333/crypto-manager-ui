import { Icon } from '@/lib/components';
import styles from './styles.module.scss';
import { IconName } from '@/lib/enums/components';

type Props = {
    onClick: () => void;
};

const BackToPortfolio: React.FC<Props> = ({
    onClick
}) => {
    return (
        <section className={styles['back-section']}>
            <div 
                className={styles['back-section__content']} 
                onClick={onClick}
            >
                <Icon 
                    className={styles['back-section__icon']} 
                    name={IconName.BACK} 
                />
                <span className={styles['back-section__label']}>Back</span>
            </div>
        </section>
    );
}

export { BackToPortfolio };

import styles from './styles.module.scss';

type Props = {
    totalSum: number | string
};

const TransactionTotal: React.FC<Props> = ({
    totalSum
}) => {
    return (
        <div className={styles['transaction-total']}>
            <h4 className={styles['transaction-total__header']}>Total: </h4>
            <p className={styles['transaction-total__price']}>{`$ ${totalSum}`}</p>
        </div>
    );
};

export { TransactionTotal };

import clsx from 'clsx';
import styles from './styles.module.scss';

type Props = {
    className?: string;
    topRow: string | number,
    bottomRow: string | number
}

const InfoBlock: React.FC<Props> = ({
    className,
    topRow,
    bottomRow
}) => {
    return (
        <article 
            className={clsx(
                styles['info-block'],
                className
            )}
        >
            <h4 className={styles["info-block__header"]}>{topRow}</h4>
            <p className={styles["info-block__description"]}>{bottomRow}</p>
        </article>
    );
}

export { InfoBlock };

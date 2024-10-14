import { Button } from "@/lib/components";
import styles from './styles.module.scss';

type Props = {
    name: string;
    totalSum: number;
    image?: string;
    onOpenAddTransaction: React.MouseEventHandler<HTMLButtonElement>;
}

const Stats: React.FC<Props> = ({
    name,
    totalSum,
    image,
    onOpenAddTransaction
}) => {
    const isImageExists = image !== undefined;

    return (
        <section className={styles.stats}>
            <div className={styles.stats__side}>
                <div className={styles['stats__image-with-name']}>
                    {isImageExists && (
                        <img 
                            className={styles['stats__entity-image']}
                            src={image} 
                            alt="Entity image" 
                        />
                    )}
                    <p 
                        className={styles['stats__entity-name']}
                    >{name}</p>
                </div>
                <h2 
                    className={styles['stats__total-header']}
                >${totalSum}</h2>
            </div>
            <div className={styles.stats__side}>
                <Button 
                    onClick={onOpenAddTransaction}
                    isSecondary
                >+ Add transaction</Button>
            </div>
        </section>
    );
}

export { Stats };

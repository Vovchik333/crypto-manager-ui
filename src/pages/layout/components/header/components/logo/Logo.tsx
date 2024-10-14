import clsx from 'clsx';
import styles from './styles.module.scss';

type Props = {
    className?: string;
};

const Logo: React.FC<Props> = ({
    className
}) => {
    return (
        <h3 
            className={clsx(
                styles.logo,
                className
            )}
        >Crypto Manager</h3>
    );
}

export { Logo };

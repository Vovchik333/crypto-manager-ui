import styles from './styles.module.scss';

type Props = {
    children: string;
}

const NotFound: React.FC<Props> = ({
    children
}) => {
    return (
        <div className={styles["not-found"]}>
            <p className={styles["not-found__message"]}>
                {children}
            </p>
        </div>
    );
}

export { NotFound };

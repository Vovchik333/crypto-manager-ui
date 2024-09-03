import { ReactNode } from "react";
import styles from './styles.module.scss';

type Props = {
    children: ReactNode;
};

const Modal: React.FC<Props> = ({
    children
}) => {
    return (
        <div className={styles["modal"]}>
            {children}
        </div>
    );
}

export { Modal };
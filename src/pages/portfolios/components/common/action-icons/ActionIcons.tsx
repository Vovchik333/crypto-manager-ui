import { ReactNode } from "react";
import styles from './styles.module.scss';

type Props = {
    children: ReactNode;
};

const ActionIcons: React.FC<Props> = ({
    children
}) => {
    return (
        <div className={styles['action-icons']}>
            {children}
        </div>
    );
}

export { ActionIcons };

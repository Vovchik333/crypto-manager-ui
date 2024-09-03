import { IconName } from "@/lib/enums/components";
import { Icon } from "..";
import styles from './styles.module.scss';

const Spinner: React.FC = () => {
    return (
        <div className={styles["spinner"]}>
            <Icon 
                className={styles["spinner__icon"]} 
                name={IconName.SPINNER} 
                spin={true}
            />
        </div>
    );
}

export { Spinner };

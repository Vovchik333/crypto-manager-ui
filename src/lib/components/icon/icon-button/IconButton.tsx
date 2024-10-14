import clsx from "clsx";
import { IconName } from "@/lib/enums/components";
import { ValueOf } from "@/lib/types";
import { Icon } from "../icon/Icon";
import styles from './styles.module.scss';

type Props = {
    className?: string;
    name: ValueOf<typeof IconName>;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const IconButton: React.FC<Props> = ({
    className,
    name,
    onClick
}) => {
    return (
        <button 
            className={clsx(
                styles['icon-button'],
                className
            )} 
            type="button" 
            onClick={onClick}
        >
            <Icon className={styles["icon-button__icon"]} name={name} />
        </button>
    );
}

export { IconButton };

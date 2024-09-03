import { ReactNode } from "react";
import { ValueOf } from "@/lib/types";
import { ButtonType } from "@/lib/enums/components";
import styles from './styles.module.scss';
import clsx from "clsx";

type Props = {
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    className?: string;
    type?: ValueOf<typeof ButtonType>;
    isPrimary?: boolean;
    isSecondary?: boolean;
    children?: ReactNode;
};

const Button: React.FC<Props> = ({
    onClick,
    className,
    type = ButtonType.BUTTON,
    isPrimary = false,
    isSecondary = false,
    children
}) => {
    return (
        <button
            className={clsx(
                styles['button'],
                isPrimary && styles['primary-button'],
                isSecondary && styles['secondary-button'],
                className
            )}
            type={type}
            onClick={onClick}
        >
            {children}
        </button>
    );
}

export { Button }
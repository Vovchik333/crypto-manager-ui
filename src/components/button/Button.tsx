import { ReactNode } from "react";
import { ValueOf } from "../../common/generic/value-of/value-of.type";
import { ButtonType } from "../../common/enums";
import './Button.css';

type Props = {
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    className?: string;
    type?: ValueOf<typeof ButtonType>;
    children?: ReactNode;
};

const Button: React.FC<Props> = ({
    onClick,
    className,
    type = ButtonType.BUTTON,
    children
}) => {
    return (
        <button
            className={className}
            type={type}
            onClick={onClick}
        >
            {children}
        </button>
    );
}

export { Button }
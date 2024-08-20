import { IconName } from "../../common/enums";
import { ValueOf } from "../../common/generic/value-of/value-of.type";
import { Icon } from "../icon/Icon";
import './IconButton.css';

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
        <button className={className} type="button" onClick={onClick}>
            <Icon className="icon-button__icon" name={name} />
        </button>
    );
}

export { IconButton };

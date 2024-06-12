import { IconName } from "../../common/enums/components/components";
import { ValueOf } from "../../common/generic/value-of/value-of.type";
import { Icon } from "../icon/Icon";
import './IconButton.css';

type Props = {
    className?: string;
    name: ValueOf<typeof IconName>;
    label?: string | number;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const IconButton: React.FC<Props> = ({
    className,
    name,
    label,
    onClick
}) => {
    return (
        <button className={className} type="button" onClick={onClick}>
            <Icon name={name} />
            {Boolean(label) &&
                <span className="btn-label">{label}</span>
            }
        </button>
    );
}

export { IconButton };

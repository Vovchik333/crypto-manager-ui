import { Link } from "react-router-dom";
import { ValueOf } from "../../common/generic";
import { AppRoute, IconName } from "../../common/enums";
import { Icon } from "..";
import './IconLink.css';

type Props = {
    className?: string;
    name: ValueOf<typeof IconName>;
    to: ValueOf<typeof AppRoute>;
    children: string;
    onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

const IconLink: React.FC<Props> = ({
    className,
    name,
    to,
    children,
    onClick
}) => {
    return (
        <Link className={className} to={to} onClick={onClick}>
            <Icon className="icon" name={name} />
            <span className="icon-link__text">{children}</span>
        </Link>
    );
}

export { IconLink };

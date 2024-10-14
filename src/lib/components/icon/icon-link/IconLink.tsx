import { Link } from "react-router-dom";
import { ValueOf } from "@/lib/types";
import { AppRoute } from "@/common/enums";
import { IconName } from '@/lib/enums/components';
import { Icon } from "../..";
import styles from './styles.module.scss';
import clsx from "clsx";

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
        <Link 
            className={clsx(
                styles['icon-link'],
                className
            )} 
            to={to} 
            onClick={onClick}
        >
            <Icon className="icon" name={name} />
            <span className="icon-link__text">{children}</span>
        </Link>
    );
}

export { IconLink };

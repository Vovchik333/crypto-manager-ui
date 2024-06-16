import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    IconColor, 
    IconName 
} from "../../common/enums/components/components";
import { ValueOf } from "../../common/generic/value-of/value-of.type";
import { iconNameToSvgIcon } from "./common";

type Props = {
    className?: string;
    name: ValueOf<typeof IconName>;
    color?: ValueOf<typeof IconColor>;
    spin?: boolean;
}

const Icon: React.FC<Props> = ({
    className,
    name,
    color = IconColor.BRIGHT_CYAN,
    spin = false
}) => {
    return (
        <FontAwesomeIcon
            className={className}
            icon={iconNameToSvgIcon[name]}
            color={color}
            spin={spin}
        />
    );
} 

export { Icon };

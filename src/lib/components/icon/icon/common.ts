import { 
    faBars,
    faCheck,
    faCoins,
    faEdit, 
    faEllipsis, 
    faPen, 
    faSignIn, 
    faSignOut, 
    faSpinner, 
    faTrash, 
    faXmark,
    faChevronRight,
    faChevronLeft,
    faUser
} from "@fortawesome/free-solid-svg-icons";
import { IconName } from "@/lib/enums/components";

const iconNameToSvgIcon = {
    [IconName.BARS]: faBars,
    [IconName.XMARK]: faXmark,
    [IconName.SIGN_IN]: faSignIn,
    [IconName.SIGN_OUT]: faSignOut,
    [IconName.COINS]: faCoins,
    [IconName.ELLIPSIS]: faEllipsis,
    [IconName.PEN]: faPen,
    [IconName.CHECK]: faCheck,
    [IconName.EDIT]: faEdit,
    [IconName.DELETE]: faTrash,
    [IconName.SPINNER]: faSpinner,
    [IconName.NEXT]: faChevronRight,
    [IconName.BACK]: faChevronLeft,
    [IconName.USER]: faUser
}

export { iconNameToSvgIcon };

import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { AppRoute } from "../../common/enums";
import { useAppSelector } from "../../hooks";

type Props = {
    children: ReactNode;
}

const PublicRoute: React.FC<Props> = ({ children }) => {
    const user = useAppSelector(state => state.auth.user);
    const hasUser = Boolean(user);
    
    return (
        hasUser ? (
            <Navigate to={AppRoute.PORTFOLIOS}/>
        ) : (
            children
        )
    );
}

export { PublicRoute }
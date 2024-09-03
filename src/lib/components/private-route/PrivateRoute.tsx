import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { AppRoute } from "@/common/enums";
import { useAppSelector } from "@/lib/hooks";

type Props = {
    children: ReactNode;
}

const PrivateRoute: React.FC<Props> = ({ children }) => {
    const user = useAppSelector(state => state.auth.user);
    const hasUser = Boolean(user);
    
    return (
        hasUser ? (
            children
        ) : (
            <Navigate to={AppRoute.SIGN_IN}/>
        )
    );
}

export { PrivateRoute }
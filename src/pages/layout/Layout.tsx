import { Outlet } from "react-router-dom";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { loadCurrentUser } from "@/store/auth/actions";
import { Spinner } from "@/lib/components";
import { StorageKey } from "@/lib/enums/storage";

const Layout: React.FC = () => {
    const dispatch = useAppDispatch();
    const { user } = useAppSelector(state => state.auth);

    const hasUser = user !== null;
    const hasToken = Boolean(localStorage.getItem(StorageKey.TOKEN));

    useEffect(() => {
        if (hasToken) {
            dispatch(loadCurrentUser());
        }
    }, [hasToken]);

    if (hasToken && !hasUser) {
        return <Spinner />
    }

    return (
        <>
            <Header />
            <div className="main-content">
                <Outlet />
            </div>
            <Footer />
        </>
    );
}

export { Layout };

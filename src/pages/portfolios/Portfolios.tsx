import { useAppSelector } from "../../hooks/hooks";

const Portfolios = () => {
    const user = useAppSelector(state => state.auth.user);

    return (
        <>
            {user?.email}
        </>
    );
};

export { Portfolios };
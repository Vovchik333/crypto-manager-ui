import { Outlet } from "react-router-dom";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";

const Layout: React.FC = () => {
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

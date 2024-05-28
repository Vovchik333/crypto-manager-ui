import { PortfolioType } from "../../common/types/portfolio/portfolio.type";
import { useAppSelector } from "../../hooks/hooks";
import './Portfolios.css';

const Portfolios = () => {
    const user = useAppSelector(state => state.auth.user);
    const portfolios: PortfolioType[] = [
        { id: '0', name: 'Main', totalSum: 100.0 },
        { id: '1', name: 'Binance', totalSum: 100.0 },
        { id: '2', name: 'Bybit', totalSum: 100.0 },
        { id: '3', name: 'OKX', totalSum: 100.0 }
    ];

    return (
        <main className="portfolios-page">
            <ul className="portfolios roboto-regular">
                {portfolios.map((portfolio) => {
                    return (
                        <li className="portfolio" key={portfolio.id}>{portfolio.name}</li>
                    );
                })}
            </ul>
        </main>
    );
};

export { Portfolios };
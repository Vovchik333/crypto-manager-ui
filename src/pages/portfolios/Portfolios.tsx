import { useEffect, useState } from "react";
import { Portfolio } from "../../common/types/portfolio/portfolio.type";
import { Button } from "../../components/button/Button";
import { PortfolioPreview } from "./components/portfolio-preview/PortfolioPreview";
import { binanceService } from "../../services/services";
import { AssetTable } from "./components/asset-table/AssetTable";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import './Portfolios.css';
import { PortfolioForm } from "./components/portfolio-form/PortfolioForm";
import { loadPortfolios } from "../../store/portfolio/actions";

const Portfolios = () => {
    const dispatch = useAppDispatch();
    const portfolios = useAppSelector(state => state.portfolio.portfolios);
    const [selectedPortfolio, setSelectedPortfolio] = useState<Portfolio>(portfolios[0]);
    const [visibility, setVisibility] = useState<boolean>(true);

    const overviewPortfolios = {
        id: '5',
        name: 'Overview',
        totalSum: portfolios.reduce((acc, cur) => acc + cur.totalSum, 0)
    };

    const handleSelectPortfolio = (portfolio: Portfolio) => {
        return () => setSelectedPortfolio(portfolio);
    };

    const handleOnOpen = () => {
        setVisibility(false);
    }

    const handleOnClose = () => {
        setVisibility(true);
    }

    useEffect(() => {
        // binanceService.getTickerPrices()
        //     .then(tickers => {
        //         const testAssets: Asset[] = [
        //             { id: '10', name: 'Cosmos', ticker: 'ATOM', price: 8.6, invested: 100.0, holdings: Math.round(100 / 8.6 * 1000) / 1000 },
        //             { id: '11', name: 'Polkadot', ticker: 'DOT', price: 7.2, invested: 200.0, holdings: Math.round(200 / 7.2 * 1000) / 1000 },
        //             { id: '21', name: 'Wormhole', ticker: 'W', price: 0.6, invested: 300.0, holdings: Math.round(300 / 0.6 * 1000) / 1000 },
        //         ];

        //         testAssets.forEach(asset => {
        //             asset.price = tickers.find(ticker => ticker.symbol === `${asset.ticker}USDT`)?.price ?? 0;
        //         });

        //         setAssets(testAssets);
        //     });

        // setPortfolios(portfoliosData);
        dispatch(loadPortfolios());
        setSelectedPortfolio(portfolios[0]);
    }, []);

    return (
        <>
            <main className="portfolios-page roboto-regular">
                <aside className="portfolios-selection">
                    <PortfolioPreview portfolio={overviewPortfolios as Portfolio}></PortfolioPreview>
                    <section className="portfolios-count">My portfolios ({portfolios.length})</section>
                    <ul className="portfolios">
                        {portfolios.map((portfolio) => {
                            return (
                                <li key={portfolio.id}>
                                    <PortfolioPreview portfolio={portfolio} onClick={handleSelectPortfolio(portfolio)}></PortfolioPreview>
                                </li>
                            );
                        })}
                    </ul>
                    <Button className="create-portfolio-btn normal-btn" onClick={handleOnOpen}>
                        + Create portfolio
                    </Button>
                </aside>
                {Boolean(selectedPortfolio) &&
                <section className="portfolio-info">
                    <section className="stats">
                        <div className="stats-left-side">
                            <span>{selectedPortfolio.name}</span>
                            <h2>Total value: </h2>
                            <strong>${selectedPortfolio.assets.reduce((acc, cur) => acc + (cur.holdings * cur.price), 0)}</strong>
                        </div>
                        <div className="stats-right-side">
                            <Button className="normal-btn"> + Add transaction </Button>
                        </div>
                    </section>
                    <AssetTable assets={selectedPortfolio.assets} />
                </section>}
            </main>
            <PortfolioForm hidden={visibility} onClose={handleOnClose}></PortfolioForm>
        </>
    );
};

export { Portfolios };
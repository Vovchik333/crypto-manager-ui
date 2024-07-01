import { Portfolio } from "../../../../common/types/types";
import { Button } from "../../../../components/components";
import { AssetTable } from "./components/components";
import './PortfolioInfo.css';

type Props = {
    portfolio: Portfolio;
    onOpenAddTransaction: React.MouseEventHandler<HTMLButtonElement>;
};

const PortfolioInfo: React.FC<Props> = ({
    portfolio,
    onOpenAddTransaction
}) => {
    const { name, assets } = portfolio;
    const portfolioTotalSum = assets.reduce((acc, cur) => acc + (cur.holdings * cur.price), 0);

    return (
        <section className="portfolio-info">
            <section className="portfolio-info__stats">
                <div className="portfolio-info__stats-side">
                    <p className="portfolio-info__current-portfolio-name portfolio-info__stats-item">{name}</p>
                    <h2 className="portfolio-info__total-sum-header portfolio-info__stats-item">Total value: </h2>
                    <strong className="portfolio-info__total-sum-price portfolio-info__stats-item">${portfolioTotalSum}</strong>
                </div>
                <div className="portfolio-info__stats-side">
                    <Button 
                        className="add-transaction-button button" 
                        onClick={onOpenAddTransaction}
                    > + Add transaction </Button>
                </div>
            </section>
            <AssetTable assets={assets} />
        </section>
    );
}

export { PortfolioInfo };

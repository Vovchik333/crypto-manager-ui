import { Portfolio } from "../../../../common/types/types";
import { NotFound } from "../../../../components/components";
import { Stats } from "../components";
import { AssetTable } from "./components/components";
import './PortfolioInfo.css';

type Props = {
    portfolio: Portfolio;
    onOpenAddTransaction: React.MouseEventHandler<HTMLButtonElement>;
    onSelectAssetId: (value: string | null) => React.MouseEventHandler<HTMLTableRowElement>;
};

const PortfolioInfo: React.FC<Props> = ({
    portfolio,
    onOpenAddTransaction,
    onSelectAssetId
}) => {
    const { name, assets } = portfolio;
    const portfolioTotalSum = assets.reduce((acc, cur) => acc + (cur.holdings * cur.price), 0);

    return (
        <section className="portfolio-info">
            <Stats 
                name={name} 
                totalSum={portfolioTotalSum} 
                onOpenAddTransaction={onOpenAddTransaction} 
            />
            {(assets.length === 0) ? (
                <NotFound>Assets not found</NotFound>
            ) : (
                <AssetTable 
                    assets={assets} 
                    onSelectAssetId={onSelectAssetId}
                />
            )}
        </section>
    );
}

export { PortfolioInfo };

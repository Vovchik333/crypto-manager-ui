import { Asset, Portfolio } from "../../../../common/types/types";
import { NotFound } from "../../../../components/components";
import { Stats } from "../components";
import { AssetTable } from "./components/components";
import './PortfolioInfo.css';

type Props = {
    portfolio: Portfolio;
    assets: Asset[];
    onOpenAddTransaction: React.MouseEventHandler<HTMLButtonElement>;
    onSelectAssetId: (value: string | null) => React.MouseEventHandler<HTMLTableRowElement>;
};

const PortfolioInfo: React.FC<Props> = ({
    portfolio,
    assets,
    onOpenAddTransaction,
    onSelectAssetId
}) => {
    const portfolioAssets = assets.filter(asset => asset.portfolioId === portfolio.id)
    const { name } = portfolio;
    const portfolioTotalSum = assets.reduce((acc, cur) => acc + (cur.holdings * cur.price), 0);

    return (
        <section className="portfolio-info">
            <Stats 
                name={name} 
                totalSum={portfolioTotalSum} 
                onOpenAddTransaction={onOpenAddTransaction} 
            />
            {(portfolioAssets.length === 0) ? (
                <NotFound>Assets not found</NotFound>
            ) : (
                <AssetTable 
                    assets={portfolioAssets} 
                    onSelectAssetId={onSelectAssetId}
                />
            )}
        </section>
    );
}

export { PortfolioInfo };

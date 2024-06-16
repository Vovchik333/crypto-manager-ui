import { InfoBlock } from "../../../../components/components";
import { Asset } from "../../../../common/types/types";
import './AssetTable.css';

type Props = {
    assets: Asset[];
}

const AssetTable: React.FC<Props> = ({
    assets
}) => {
    const assetColumns = [
        'Asset', 'Price', 'Avg buy price', 
        'Current profit', 'Invested', 'Holdings'
    ];
    const getUsdProfit = (asset: Asset): string => {
        return `${asset.currentProfit < 0 ? '-' : '+'} $${(Math.abs(asset.currentProfit)).toFixed(2)}`;
    }
    const getPercentageProfit = (asset: Asset): string => {
        return `${asset.currentProfit < 0 ? '-' : '+'} ${(Math.abs((asset.holdings * asset.price * 100 / asset.invested) - 100)).toFixed(2)} %`;
    }

    return (
        <section className="assets">
            <h3>My assets</h3>
            <div className="assets-table-wrapper">
                <table className="assets-table">
                    <thead>
                        <tr className="asset-column-names asset-row">
                            {assetColumns.map((column, index) => {
                                return (
                                    <th key={index}>{column}</th>
                                );
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {assets.map(asset => {
                            return (
                                <tr className="asset-data-row asset-row" key={asset.id}>
                                    <td><InfoBlock topRow={asset.ticker} bottomRow={asset.name}/></td>
                                    <td>${asset.price.toFixed(4)}</td>
                                    <td>{asset.avgPrice.toFixed(4)}</td>
                                    <td><InfoBlock topRow={getUsdProfit(asset)} bottomRow={getPercentageProfit(asset)}/></td>
                                    <td>${asset.invested.toFixed(2)}</td>
                                    <td><InfoBlock topRow={`$${(asset.holdings * asset.price).toFixed(2)}`} bottomRow={`${asset.holdings.toFixed(2)} ${asset.ticker}`}/></td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </section>
    );
}

export { AssetTable };

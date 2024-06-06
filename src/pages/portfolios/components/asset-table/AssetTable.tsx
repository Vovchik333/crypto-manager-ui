import { Asset } from "../../../../common/types/asset/asset.type";
import './AssetTable.css';

type Props = {
    assets: Asset[];
}

const AssetTable = ({
    assets
}: Props) => {
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
                                    <td>
                                        <div className="asset-two-fields">
                                            <span>{asset.ticker}</span>
                                            <small>{asset.name}</small>
                                        </div>
                                    </td>
                                    <td>${asset.price.toFixed(4)}</td>
                                    <td>{asset.avgPrice.toFixed(4)}</td>
                                    <td>
                                        <div className="asset-two-fields">
                                            <span>{getUsdProfit(asset)}</span>
                                            <small>{getPercentageProfit(asset)}</small>
                                        </div>
                                    </td>
                                    <td>${asset.invested.toFixed(2)}</td>
                                    <td>
                                        <div className="asset-two-fields">
                                            <span>${(asset.holdings * asset.price).toFixed(2)}</span>
                                            <small>{asset.holdings.toFixed(2)} {asset.ticker}</small>
                                        </div>
                                    </td>
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
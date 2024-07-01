import { ReactNode } from "react";
import { 
    InfoBlock, 
    TableTemplate 
} from "../../../../../../components/components";
import { Asset } from "../../../../../../common/types/types";

type Props = {
    assets: Asset[];
}

const AssetTable: React.FC<Props> = ({
    assets
}) => {
    const assetColumnNames: string[] = [
        'Asset', 'Price', 'Avg buy price', 
        'Current profit', 'Invested', 'Holdings'
    ];

    const getUsdProfit = (asset: Asset): string => {
        const { currentProfit } = asset;

        return `${currentProfit < 0 ? '-' : '+'} $${(Math.abs(currentProfit)).toFixed(2)}`;
    }
    const getPercentageProfit = (asset: Asset): string => {
        const { currentProfit, holdings, price, invested } = asset;

        return `${currentProfit < 0 ? '-' : '+'} ${(Math.abs((holdings * price * 100 / invested) - 100)).toFixed(2)} %`;
    }

    return (
        <TableTemplate 
            name="My Assets" 
            columnNames={assetColumnNames}
        >
            {assets.map(asset => {
                const { name, price, avgPrice, invested, holdings, symbol } = asset;
                const assetData: ReactNode[] = [
                    <InfoBlock topRow={symbol} bottomRow={name} />,
                    `$${price.toFixed(4)}`,
                    `${avgPrice.toFixed(4)}`,
                    <InfoBlock topRow={getUsdProfit(asset)} bottomRow={getPercentageProfit(asset)} />,
                    `$${invested.toFixed(2)}`,
                    <InfoBlock topRow={`$${(holdings * price).toFixed(2)}`} bottomRow={`${holdings.toFixed(2)} ${symbol}`} />
                ]

                return (
                    <tr className="table-template__data-row" key={asset.id}>
                        {assetData.map(data => {
                            return (
                                <td 
                                    className="table-template__row-element"
                                >
                                    {data}
                                </td>
                            );
                        })}
                    </tr>
                );
            })}
        </TableTemplate>
    );
}

export { AssetTable };

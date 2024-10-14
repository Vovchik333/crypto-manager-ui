import { ReactNode, useState } from "react";
import { 
    IconButton,
    InfoBlock, 
    Promt, 
    TableRow, 
    TableTemplate 
} from "@/lib/components";
import { 
    getFormattedAvgPrice, 
    getFormattedCurrentPrice, 
    getFormattedHoldings, 
    getFormattedInvested, 
    getFormattedUsdHoldings, 
    getPercentageProfit, 
    getUsdProfit 
} from "@/helpers";
import { Asset } from "@/common/types";
import styles from './styles.module.scss';
import { IconName } from "@/lib/enums/components";
import { useAppDispatch } from "@/lib/hooks";
import { deleteAsset } from "@/store/portfolio/actions";
import { ActionIcons } from "@/pages/portfolios/components/common/action-icons/ActionIcons";

type Props = {
    assets: Asset[];
    onSelectAssetId: (value: string | null) => void;
}

const assetColumnNames: string[] = [
    'Asset', 'Price', 'Avg buy price', 
    'Current profit', 'Invested', 'Holdings',
    'Actions'
];

const AssetTable: React.FC<Props> = ({
    assets,
    onSelectAssetId
}) => {
    const dispatch = useAppDispatch();
    const [deleteAssetId, setDeleteAssetId] = useState<string | null>(null);

    const isDeleteAsset = deleteAssetId !== null;

    const handleOpenDeleteAssetPromt = (assetId: string) => {
        return (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            event.stopPropagation();

            setDeleteAssetId(assetId);
        }
    };

    const handleCloseDeleteAssetPromt = () => {
        setDeleteAssetId(null);
    }

    const handleDeleteAsset = () => {

        dispatch(deleteAsset(deleteAssetId as string));

        setDeleteAssetId(null);
    }

    return (
        <>
            <TableTemplate 
                name="My Assets" 
                columnNames={assetColumnNames}
            >
                {assets.map((asset, idx) => {
                    const assetData: ReactNode[] = [
                        <div className={styles['coin-info-block']}>
                            <img 
                                className={styles['coin-info-block__image']} 
                                src={asset.coin.image} 
                                alt="Coin Image" 
                            />
                            <InfoBlock 
                                topRow={asset.coin.symbol} 
                                bottomRow={asset.coin.name} 
                            />
                        </div>,
                        getFormattedCurrentPrice(asset),
                        getFormattedAvgPrice(asset),
                        <InfoBlock 
                            topRow={getUsdProfit(asset)} 
                            bottomRow={getPercentageProfit(asset)} 
                        />,
                        getFormattedInvested(asset),
                        <InfoBlock 
                            topRow={getFormattedUsdHoldings(asset)} 
                            bottomRow={getFormattedHoldings(asset)} 
                        />,
                        <ActionIcons>
                            <IconButton
                                name={IconName.DELETE}
                                onClick={handleOpenDeleteAssetPromt(asset._id)}
                            ></IconButton>
                        </ActionIcons>
                    ];

                    return (
                        <TableRow 
                            key={`${asset._id}-${idx}`}
                            elements={assetData} 
                            onClick={() => onSelectAssetId(asset._id)} 
                        />);
                })}
            </TableTemplate>
            {isDeleteAsset && (
                <Promt 
                    topic="Delete asset"
                    text="Are you sure you want to delete your asset?"
                    onCancel={handleCloseDeleteAssetPromt}
                    onOk={handleDeleteAsset}
                />
            )}
        </>
    );
}

export { AssetTable };

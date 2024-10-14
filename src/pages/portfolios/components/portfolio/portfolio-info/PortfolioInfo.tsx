import { memo } from "react";
import { Portfolio } from "@/common/types";
import { NotFound } from "@/lib/components";
import { Stats } from "../../common/stats/Stats";
import { AssetTable } from "./components/components";
import styles from './styles.module.scss';

type Props = {
    portfolio: Portfolio;
    onOpenAddTransaction: React.MouseEventHandler<HTMLButtonElement>;
    onSelectAssetId: (value: string | null) => void;
};

const PortfolioInfo: React.FC<Props> = memo(({
    portfolio,
    onOpenAddTransaction,
    onSelectAssetId
}) => {
    const { name, totalSum } = portfolio;
    const { assets } = portfolio;

    return (
        <section className={styles['portfolio-info']}>
            <Stats 
                name={name} 
                totalSum={totalSum} 
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
});

export { PortfolioInfo };

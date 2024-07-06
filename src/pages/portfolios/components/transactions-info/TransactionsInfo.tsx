import { useState } from "react";
import { IconName } from "../../../../common/enums/enums";
import { Asset, Transaction } from "../../../../common/types/types";
import { Icon } from "../../../../components/components";
import { Stats, TransactionDetails } from "../components";
import { TransactionsTable } from "./components/components";
import './Transactioninfo.css';

type Props = {
    assets: Asset[];
    selectedAssetId: string;
    onOpenAddTransaction: React.MouseEventHandler<HTMLButtonElement>;
    onBackToPortfolio: () => void;
};

const TransactionsInfo: React.FC<Props> = ({
    assets,
    selectedAssetId,
    onOpenAddTransaction,
    onBackToPortfolio
}) => { 
    const [transactioDetailsId, setisTansactionDetails] = useState<string | null>(null);

    const handleOnOpenTransactionDetails = (id: string) => {
        return () => setisTansactionDetails(id);
    }

    const handleOnCloseTransactionDetails = () => {
        setisTansactionDetails(null);
    }

    const selectedAsset = assets.find(asset => asset.id === selectedAssetId) as Asset;
    const { name, holdings, price, transactions } = selectedAsset;
    const totalSum = (holdings * price);

    const selectedTransaction = transactions.find(transaction => transaction.id === transactioDetailsId) as Transaction;

    return (
        <>
            <section className="portfolio-info">
                <section className="back-section">
                    <div className="back-section__content" onClick={onBackToPortfolio}>
                        <Icon className="icon back-section__icon" name={IconName.BACK} />
                        <span className="back-section__label">Back</span>
                    </div>
                </section>
                <Stats 
                    name={name} 
                    totalSum={totalSum} 
                    onOpenAddTransaction={onOpenAddTransaction}
                />
                <TransactionsTable 
                    asset={selectedAsset} 
                    onBackToPortfolio={onBackToPortfolio}
                    onOpenTransactionDetails={handleOnOpenTransactionDetails}
                />  
            </section>
            {Boolean(selectedTransaction) && (
                <TransactionDetails 
                    asset={selectedAsset}
                    transaction={selectedTransaction}
                    onClose={handleOnCloseTransactionDetails}
                />
            )}
        </>
    );
}

export { TransactionsInfo };

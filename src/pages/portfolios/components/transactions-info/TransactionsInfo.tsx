import { useState } from "react";
import { IconName } from "../../../../common/enums/enums";
import { Asset, Portfolio, Transaction } from "../../../../common/types/types";
import { Icon, NotFound } from "../../../../components/components";
import { Stats, TransactionDetails } from "../components";
import { TransactionsTable } from "./components/components";
import './Transactioninfo.css';

type Props = {
    portfolio: Portfolio;
    selectedAssetId: string;
    onOpenAddTransaction: React.MouseEventHandler<HTMLButtonElement>;
    onBackToPortfolio: React.MouseEventHandler<HTMLDivElement>;
};

const TransactionsInfo: React.FC<Props> = ({
    portfolio,
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

    const selectedAsset = portfolio.assets.find(asset => asset.id === selectedAssetId) as Asset;
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
                {(transactions.length === 0) ? (
                    <NotFound>Transactions not found</NotFound>
                ) : (
                    <TransactionsTable 
                        transactions={transactions} 
                        onOpenTransactionDetails={handleOnOpenTransactionDetails}
                    />  
                )}
            </section>
            {Boolean(selectedTransaction) && (
                <TransactionDetails 
                    transaction={selectedTransaction}
                    onClose={handleOnCloseTransactionDetails}
                />
            )}
        </>
    );
}

export { TransactionsInfo };

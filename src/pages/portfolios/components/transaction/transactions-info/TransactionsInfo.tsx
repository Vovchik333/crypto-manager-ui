import { memo, useEffect, useState } from "react";
import { Asset, Transaction } from "@/common/types";
import { Spinner } from "@/lib/components";
import { Stats, TransactionDetails } from "@/pages/portfolios/components";
import { TransactionsTable } from "./components";
import { UpdateTransaction } from "../update-transaction/UpdateTransaction";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { loadTransactions } from "@/store/transaction/actions";
import { BackToPortfolio } from "./components/back-to-portfolio/BackToPortfolio";
import styles from './styles.module.scss';

type Props = {
    asset: Asset;
    onOpenAddTransaction: React.MouseEventHandler<HTMLButtonElement>;
    onBackToPortfolio: () => void;
};

const TransactionsInfo: React.FC<Props> = memo(({
    asset,
    onOpenAddTransaction,
    onBackToPortfolio
}) => { 
    const dispatch = useAppDispatch();
    const transactionState = useAppSelector(state => state.transaction);
    const [transactioDetailsId, setIsTansactionDetails] = useState<string | null>(null);
    const [updateTransactionId, setUpdateTransactionId] = useState<string | null>(null);

    const { transactions } = transactionState;
    const transactionForUpdate = transactions.find(transaction => transaction._id === updateTransactionId) as Transaction;
    const selectedTransaction = transactions.find(transaction => transaction._id === transactioDetailsId) as Transaction;
    const totalSum = asset.holdings * asset.coin.currentPrice;

    const handleOpenTransactionDetails = (id: string) => {
        setIsTansactionDetails(id);
    };

    const handleCloseTransactionDetails = () => {
        setIsTansactionDetails(null);
    };

    const handleOpenUpdateTransaction = (id: string) => {
        return (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            event.stopPropagation();

            setUpdateTransactionId(id);
        }
    };

    const handleCloseUpdateTransaction = () => {
        setUpdateTransactionId(null);
    }

    useEffect(() => {
        dispatch(loadTransactions({ assetId: asset._id }));
    }, [dispatch]);

    if (!transactionState.isLoaded) {
        return <Spinner />
    }

    return (
        <>
            <section className={styles['transactions-info']}>
                <BackToPortfolio 
                    onClick={onBackToPortfolio}
                />
                <Stats 
                    name={asset.coin.name} 
                    totalSum={totalSum} 
                    onOpenAddTransaction={onOpenAddTransaction}
                    image={asset.coin.image}
                />
                <TransactionsTable 
                    asset={asset}
                    transactions={transactions}
                    onBackToPortfolio={onBackToPortfolio}
                    onOpenTransactionDetails={handleOpenTransactionDetails}
                    onOpenUpdateTransaction={handleOpenUpdateTransaction}
                />  
            </section>
            {Boolean(selectedTransaction) && (
                <TransactionDetails 
                    asset={asset}
                    transaction={selectedTransaction}
                    onClose={handleCloseTransactionDetails}
                />
            )}
            {Boolean(updateTransactionId) && (
                <UpdateTransaction
                    transaction={transactionForUpdate}
                    onClose={handleCloseUpdateTransaction}
                />
            )}
        </>
    );
});

export { TransactionsInfo };

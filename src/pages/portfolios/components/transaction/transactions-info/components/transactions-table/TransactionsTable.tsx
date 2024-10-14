import { ReactNode, useState } from "react";
import { Asset, Transaction } from "@/common/types";
import { IconButton, InfoBlock, Promt, TableRow, TableTemplate } from "@/lib/components";
import { IconName } from "@/lib/enums/components";
import { useAppDispatch } from "@/lib/hooks";
import { deleteLastTransaction, deleteTransaction } from "@/store/transaction/actions";
import { ActionIcons } from "@/pages/portfolios/components/common/action-icons/ActionIcons";

type Props = {
    asset: Asset;
    transactions: Transaction[];
    onOpenTransactionDetails: (id: string) => void;
    onOpenUpdateTransaction: (id: string) => React.MouseEventHandler<HTMLButtonElement>;
    onBackToPortfolio: () => void;
};

const columnNames = ['Type', 'Price', 'Amount', 'Actions'];

const TransactionsTable: React.FC<Props> = ({
    asset,
    transactions,
    onOpenTransactionDetails,
    onOpenUpdateTransaction,
    onBackToPortfolio
}) => {
    const dispatch = useAppDispatch();
    const [deleteTransactionId, setDeleteTransactionId] = useState<string | null>(null);

    const transactionForDelete = transactions.find(transaction => transaction._id === deleteTransactionId) as Transaction;

    const handleOpenDeleteTransactionPromt = (transactionId: string) => {
        return (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            event.stopPropagation();

            setDeleteTransactionId(transactionId);
        }
    };

    const handleCloseDeleteTransactionPromt = () => setDeleteTransactionId(null);

    const handleRemoveTransaction = () => {
        if (transactions.length === 1) {
            dispatch(deleteLastTransaction(transactionForDelete));
            onBackToPortfolio();
        } else {
            dispatch(deleteTransaction(deleteTransactionId as string));
        }

        setDeleteTransactionId(null);
    }

    return (
        <>
            <TableTemplate name="Transactions" columnNames={columnNames}>
                {transactions.map((transaction, idx) => {
                    const { pricePerCoin, type, quantity, createdAt } = transaction;
                    const transactionsData: ReactNode[] = [
                        <InfoBlock 
                            topRow={type} 
                            bottomRow={createdAt} 
                        />,
                        `$${pricePerCoin}`,
                        <InfoBlock 
                            topRow={`+$${(quantity * pricePerCoin).toFixed(2)}`} 
                            bottomRow={`+${quantity} ${asset.coin.symbol}`} 
                        />,
                        <ActionIcons>
                            <IconButton 
                                name={IconName.EDIT} 
                                onClick={onOpenUpdateTransaction(transaction._id)} 
                            />
                            <IconButton 
                                name={IconName.DELETE} 
                                onClick={handleOpenDeleteTransactionPromt(transaction._id)} 
                            />
                        </ActionIcons>
                    ];

                    return (
                        <TableRow 
                            key={`${transaction._id}-${idx}`}
                            elements={transactionsData} 
                            onClick={() => onOpenTransactionDetails(transaction._id)} 
                        />
                    );
                })}
            </TableTemplate>
            {Boolean(deleteTransactionId) && (
                <Promt 
                    topic="Delete transaction"
                    text="Are you sure you want to delete your transaction?"
                    onCancel={handleCloseDeleteTransactionPromt}
                    onOk={handleRemoveTransaction}
                />
            )}
        </>
    );
}

export { TransactionsTable };

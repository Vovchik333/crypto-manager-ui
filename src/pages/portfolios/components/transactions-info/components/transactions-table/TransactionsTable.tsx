import { ReactNode, useState } from "react";
import { Asset, Transaction } from "../../../../../../common/types/types";
import { IconButton, InfoBlock, Promt, TableTemplate } from "../../../../../../components/components";
import { IconName } from "../../../../../../common/enums/enums";
import { useAppDispatch } from "../../../../../../hooks/hooks";
import { deleteAsset, removeTransaction } from "../../../../../../store/asset/actions";
import './TransactionsTable.css';

type Props = {
    asset: Asset;
    onOpenTransactionDetails: (id: string) => React.MouseEventHandler<HTMLTableRowElement>;
    onOpenUpdateTransaction: (id: string) => React.MouseEventHandler<HTMLButtonElement>;
    onBackToPortfolio: () => void;
}

const TransactionsTable: React.FC<Props> = ({
    asset,
    onOpenTransactionDetails,
    onOpenUpdateTransaction,
    onBackToPortfolio
}) => {
    const dispatch = useAppDispatch();
    const [isDeleteTransaction, setIsDeleteTransaction] = useState<boolean>(false);
    const [deleteTransactionId, setDeleteTransactionId] = useState<string | null>(null);

    const columnNames = ['Type', 'Price', 'Amount', 'Actions'];
    const { symbol, transactions } = asset;

    const handleOnOpenDeleteTransactionPromt = (transactionId: string) => {
        return (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            event.stopPropagation();

            setDeleteTransactionId(transactionId);
            setIsDeleteTransaction(true);
        }
    };

    const handleOnCloseDeleteTransactionPromt = () => {
        setDeleteTransactionId(null);
        setIsDeleteTransaction(false);
    }

    const handleOnRemoveTransaction = () => {
        if (transactions.length === 1) {
            dispatch(deleteAsset(asset.id as string));
            onBackToPortfolio();
        } else {
            const { transactions, ...assetWithoutTransactions } = asset;
            const deleteTransaction = transactions.find(transaction => transaction.id === deleteTransactionId);

            dispatch(removeTransaction({
                ...assetWithoutTransactions,
                transaction: deleteTransaction as Transaction
            }));
        }
    }

    return (
        <>
            <TableTemplate name="Transactions" columnNames={columnNames}>
                {transactions.map(transaction => {
                    const { pricePerCoin, type, quantity, createdAt } = transaction;
                    const transactionsData: ReactNode[] = [
                        <InfoBlock topRow={type} bottomRow={createdAt} />,
                        `$${pricePerCoin}`,
                        <InfoBlock topRow={`+$${(quantity * pricePerCoin).toFixed(2)}`} bottomRow={`+${quantity} ${symbol}`} />,
                        <div className="action-icons">
                            <IconButton className="icon-button" name={IconName.EDIT} onClick={onOpenUpdateTransaction(transaction.id as string)} />
                            <IconButton className="icon-button" name={IconName.DELETE} onClick={handleOnOpenDeleteTransactionPromt(transaction.id as string)} />
                        </div>
                    ];

                    return (
                        <tr key={transaction.id} className="table-template__data-row" onClick={onOpenTransactionDetails(transaction.id as string)}>
                            {transactionsData.map((data, index) => {
                                return (
                                    <td 
                                        key={index}
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
            {isDeleteTransaction && (
                <Promt 
                    topic="Delete transaction"
                    text="Are you sure you want to delete your transaction?"
                    onCancel={handleOnCloseDeleteTransactionPromt}
                    onOk={handleOnRemoveTransaction}
                />
            )}
        </>
    );
}

export { TransactionsTable };

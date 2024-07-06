import { ReactNode } from "react";
import { Asset } from "../../../../../../common/types/types";
import { IconButton, InfoBlock, TableTemplate } from "../../../../../../components/components";
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

    const columnNames = ['Type', 'Price', 'Amount', 'Actions'];
    const { symbol, transactions } = asset;

    const handleOnRemoveTransaction = (transactionId: string) => {
        return (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            event.stopPropagation();

            if (transactions.length === 1) {
                onBackToPortfolio();
                dispatch(deleteAsset(asset.id as string));
            } else {
                dispatch(removeTransaction({
                    assetId: asset.id as string,
                    transactionId
                }));
            }
        }
    }

    return (
        <TableTemplate name="Transactions" columnNames={columnNames}>
            {transactions.map(transaction => {
                const { pricePerCoin, type, quantity, createdAt } = transaction;
                const transactionsData: ReactNode[] = [
                    <InfoBlock topRow={type} bottomRow={createdAt} />,
                    `$${pricePerCoin}`,
                    <InfoBlock topRow={`+$${(quantity * pricePerCoin).toFixed(2)}`} bottomRow={`+${quantity} ${symbol}`} />,
                    <div className="action-icons">
                        <IconButton className="icon-button" name={IconName.EDIT} onClick={onOpenUpdateTransaction(transaction.id as string)} />
                        <IconButton className="icon-button" name={IconName.DELETE} onClick={handleOnRemoveTransaction(transaction.id as string)} />
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
    );
}

export { TransactionsTable };

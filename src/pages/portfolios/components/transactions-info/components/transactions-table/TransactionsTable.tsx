import { ReactNode } from "react";
import { Transaction } from "../../../../../../common/types/types";
import { IconButton, InfoBlock, TableTemplate } from "../../../../../../components/components";
import { IconName } from "../../../../../../common/enums/enums";
import './TransactionsTable.css';

type Props = {
    transactions: Transaction[];
    onOpenTransactionDetails: (id: string) => React.MouseEventHandler<HTMLTableRowElement>;
}

const TransactionsTable: React.FC<Props> = ({
    transactions,
    onOpenTransactionDetails
}) => {
    const columnNames = ['Type', 'Price', 'Amount', 'Actions'];

    return (
        <TableTemplate name="Transactions" columnNames={columnNames}>
            {transactions.map(transaction => {
                const { symbol, pricePerCoin, type, quantity, createdAt } = transaction;
                const transactionsData: ReactNode[] = [
                    <InfoBlock topRow={type} bottomRow={createdAt} />,
                    `$${pricePerCoin}`,
                    <InfoBlock topRow={`+$${(quantity * pricePerCoin).toFixed(2)}`} bottomRow={`+${quantity} ${symbol}`} />,
                    <div className="action-icons">
                        <IconButton className="icon-button" name={IconName.EDIT} onClick={undefined} />
                        <IconButton className="icon-button" name={IconName.DELETE} onClick={undefined} />
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

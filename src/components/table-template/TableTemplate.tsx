import { ReactNode } from "react";
import './TableTemplate.css';

type Props = {
    columnNames: string[];
    name: string;
    children: ReactNode;
}

const TableTemplate: React.FC<Props> = ({
    columnNames,
    name,
    children
}) => {
    return (
        <section className="table-template">
            <h3 className="table-template__name">{name}</h3>
            <div className="table-template__wrapper">
                <table className="table-template__content">
                    <thead className="table-template__head">
                        <tr className="table-template__header-row">
                            {columnNames.map((column, index) => {
                                return (
                                    <th className="table-template__row-element" key={index}>{column}</th>
                                );
                            })}
                        </tr>
                    </thead>
                    <tbody className="table-template__body">
                        {children}
                    </tbody>
                </table>
            </div>
        </section>
    );
}

export { TableTemplate };

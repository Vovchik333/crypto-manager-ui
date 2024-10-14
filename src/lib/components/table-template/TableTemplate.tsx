import { ReactNode } from "react";
import styles from './styles.module.scss';

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
        <section className={styles["table-template"]}>
            <h3 className={styles["table-template__name"]}>{name}</h3>
            <div className={styles["table-template__wrapper"]}>
                <table className={styles["table-template__content"]}>
                    <thead className={styles["table-template__head"]}>
                        <tr className={styles["table-template__header-row"]}>
                            {columnNames.map((column, index) => {
                                return (
                                    <th 
                                        className={styles["table-template__header-data"]} 
                                        key={index}
                                    >{column}</th>
                                );
                            })}
                        </tr>
                    </thead>
                    <tbody className={styles["table-template__body"]}>
                        {children}
                    </tbody>
                </table>
            </div>
        </section>
    );
}

export { TableTemplate };

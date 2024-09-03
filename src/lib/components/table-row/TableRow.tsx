import { ReactNode } from 'react';
import styles from './styles.module.scss';

type Props = {
    elements: ReactNode[]; 
    onClick: () => void;
};

const TableRow: React.FC<Props> = ({
    elements,
    onClick
}) => {
    return (
        <tr 
            className={styles["table-row"]} 
            onClick={onClick}
        >
            {elements.map((data, index) => {
                return (
                    <td 
                        key={index}
                        className={styles["table-row__data"]}
                    >{data}</td>
                );
            })}
        </tr>
    );
};

export { TableRow };

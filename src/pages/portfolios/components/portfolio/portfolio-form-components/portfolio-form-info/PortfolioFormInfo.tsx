import { LabelWithInput } from "@/lib/components";
import styles from "./styles.module.scss";

type Props = {
    name: string;
    onChangeName: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const PortfolioFormInfo: React.FC<Props> = ({
    name,
    onChangeName
}) => {
    return (
        <div className={styles['portfolio-info']}>
            <LabelWithInput
                id='portfolio-name-input'
                name="name"
                placeholder="Type name..." 
                value={name} 
                onChange={onChangeName} 
            >Name:</LabelWithInput>
        </div>
    );
}

export { PortfolioFormInfo };

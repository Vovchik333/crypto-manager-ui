import { Button, Modal } from "..";
import styles from './styles.module.scss';

type Props = {
    topic: string;
    text: string;
    onCancel: React.MouseEventHandler<HTMLButtonElement>;
    onOk: React.MouseEventHandler<HTMLButtonElement>;
};

const Promt: React.FC<Props> = ({
    topic,
    text,
    onCancel,
    onOk
}) => {
    return (
        <Modal>
            <div className={styles["promt"]}>
                <h1 className={styles["promt__topic"]}>{topic}</h1>
                <p className={styles["promt__text"]}>{text}</p>
                <div className={styles["promt__buttons"]}>
                    <Button 
                        className={styles["promt__button-cancel"]}
                        onClick={onCancel}
                        isSecondary
                    >Cancel</Button>
                    <Button 
                        className={styles["promt__button-ok"]}
                        onClick={onOk}
                        isPrimary
                    >Ok</Button>
                </div>
            </div>
        </Modal>
    );
};

export { Promt };

import { Button, Modal } from "../components";
import './Promt.css';

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
            <div className="promt">
                <h1 className="promt__topic">{topic}</h1>
                <p className="promt__text">{text}</p>
                <div className="promt__buttons">
                    <Button 
                        className="button secondary-button promt__button-cancel"
                        onClick={onCancel}
                    >Cancel</Button>
                    <Button 
                        className="button primary-button promt__button-ok"
                        onClick={onOk}
                    >Ok</Button>
                </div>
            </div>
        </Modal>
    );
};

export { Promt };

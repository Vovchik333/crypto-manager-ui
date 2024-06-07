import { ReactNode } from "react";
import './Modal.css';

type Props = {
    hidden: boolean;
    children: ReactNode;
};

const Modal: React.FC<Props> = ({
    hidden,
    children
}) => {
    return (
        <div hidden={hidden}>
            <div className="modal">
                {children}
            </div>
        </div>
    );
}

export { Modal };
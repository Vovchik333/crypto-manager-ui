import { ReactNode } from "react";
import './Modal.css';

type Props = {
    children: ReactNode;
};

const Modal: React.FC<Props> = ({
    children
}) => {
    return (
        <div>
            <div className="modal">
                {children}
            </div>
        </div>
    );
}

export { Modal };
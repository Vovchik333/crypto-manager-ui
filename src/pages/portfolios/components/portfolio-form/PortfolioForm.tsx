import { ReactNode, } from 'react';
import { 
    IconButton,
    Modal
} from '../../../../components/components';
import { IconName } from '../../../../common/enums/enums';
import './PortfolioForm.css';

type Props = {
    hidden: boolean;
    topic: string;
    children: ReactNode;
    onClose: () => void;
}

const PortfolioForm: React.FC<Props> = ({
    topic,
    children,
    onClose
}) => {
    return (
        <Modal>
            <div className='portfolio-form-wrapper'>
                <header className='portfolio-form-header'>
                    <h3>{topic}</h3>
                    <IconButton className='icon-button' name={IconName.XMARK} onClick={onClose}></IconButton>
                </header>
                {children}
            </div>
        </Modal>
    );
};

export { PortfolioForm };

import { ReactNode, } from 'react';
import { 
    IconButton,
    Modal
} from '../components';
import { IconName } from '../../common/enums/enums';
import './FormTemplate.css';

type Props = {
    topic: string;
    children: ReactNode;
    onClose: () => void;
}

const FormTemplate: React.FC<Props> = ({
    topic,
    children,
    onClose
}) => {
    return (
        <Modal>
            <div className='form-template'>
                <header className='form-template__header'>
                    <h3>{topic}</h3>
                    <IconButton className='icon-button' name={IconName.XMARK} onClick={onClose}></IconButton>
                </header>
                {children}
            </div>
        </Modal>
    );
};

export { FormTemplate };

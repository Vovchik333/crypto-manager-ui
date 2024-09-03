import { ReactNode, } from 'react';
import { 
    IconButton,
    Modal
} from '..';
import { IconName } from '@/lib/enums/components';
import styles from './styles.module.scss';

type Props = {
    topic: string;
    children: ReactNode;
    onClose: React.MouseEventHandler<HTMLButtonElement>;
}

const FormTemplate: React.FC<Props> = ({
    topic,
    children,
    onClose
}) => {
    return (
        <Modal>
            <div className={styles['form-template']}>
                <header className={styles['form-template__header']}>
                    <h3>{topic}</h3>
                    <IconButton 
                        name={IconName.XMARK} 
                        onClick={onClose}
                    />
                </header>
                {children}
            </div>
        </Modal>
    );
};

export { FormTemplate };

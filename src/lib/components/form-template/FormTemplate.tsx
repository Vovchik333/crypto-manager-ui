import { ReactNode, } from 'react';
import { 
    IconButton,
    Modal
} from '..';
import { IconName } from '@/lib/enums/components';
import styles from './styles.module.scss';
import clsx from 'clsx';

type Props = {
    className?: string;
    topic: string;
    children: ReactNode;
    onClose: () => void;
}

const FormTemplate: React.FC<Props> = ({
    className,
    topic,
    children,
    onClose
}) => {
    return (
        <Modal>
            <div className={clsx(
                styles['form-template'],
                className
            )}>
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

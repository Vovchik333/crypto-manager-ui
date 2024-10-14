import { FormTemplate, Icon } from '@/lib/components';
import { ValueOf } from '@/lib/types';
import { IconName } from '@/lib/enums/components';
import styles from './styles.module.scss';

type Action = {
    iconName: ValueOf<typeof IconName>;
    text: string;
    onClick: () => void;
}

type Props = {
    actions: Action[];
    onClose: () => void;
};

const ActionList: React.FC<Props> = ({
    actions,
    onClose
}) => {
    return (
        <FormTemplate
            className={styles['action-list']}
            topic='Select action'
            onClose={onClose}
        >
            <ul 
                className={styles['action-list__items']}
            >
                {actions.map((action, idx) => {
                    const { iconName, text, onClick } = action;
                    return (
                        <li 
                            key={idx}
                            className={styles['action-list__item']} 
                            onClick={onClick}
                        >
                            <Icon 
                                name={iconName} 
                            />
                            <span>{text}</span>
                        </li>
                    );
                })}
            </ul>
        </FormTemplate>
    );
};

export { ActionList };

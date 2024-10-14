import { IconButton } from '@/lib/components';
import styles from './styles.module.scss';
import { IconName } from '@/lib/enums/components';
import { Portfolio } from '@/common/types';

type Props = {
    portfolios: Portfolio[];
    editMode: boolean;
    onToggleEditMode: () => void;
}

const PortfoliosCount: React.FC<Props> = ({
    portfolios,
    editMode,
    onToggleEditMode
}) => {
    return (
        <section 
            className={styles['portfolios-selection__count']}
        >
            <span>My portfolios ({portfolios.length})</span>
            <IconButton 
                className="icon-button" 
                name={editMode ? IconName.CHECK : IconName.PEN} 
                onClick={onToggleEditMode}
            />
        </section>
    );
};

export { PortfoliosCount };

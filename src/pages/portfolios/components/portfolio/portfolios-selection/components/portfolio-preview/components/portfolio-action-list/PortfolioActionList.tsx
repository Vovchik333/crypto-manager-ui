import { ActionList } from '@/lib/components';
import { IconName } from '@/lib/enums/components';

type Props = {
    onOpenUpdatePortfolio: () => void;
    onOpenDeletePortfolioPromt: () => void;
    onClose: () => void;
};

const PortfolioActionList: React.FC<Props> = ({
    onOpenUpdatePortfolio,
    onOpenDeletePortfolioPromt,
    onClose
}) => {
    const actions = [
        { 
            iconName: IconName.EDIT, 
            text: 'Edit',
            onClick: onOpenUpdatePortfolio 
        },
        { 
            iconName: IconName.DELETE, 
            text: 'Delete',
            onClick: onOpenDeletePortfolioPromt 
        }
    ];

    return (
        <ActionList 
            actions={actions} 
            onClose={onClose} 
        />
    );
};

export { PortfolioActionList };

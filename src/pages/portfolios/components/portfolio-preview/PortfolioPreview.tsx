import { useEffect } from "react";
import { useAppDispatch } from "../../../../hooks/hooks";
import { 
    InfoBlock, 
    IconButton 
} from "../../../../components/components";
import { Portfolio } from "../../../../common/types/types";
import { IconName } from "../../../../common/enums/enums";
import { deletePortfolio } from "../../../../store/portfolio/actions";
import './PortfolioPreview.css';

type Props = {
    portfolio: Portfolio;
    showPortfolioActionsId: string; 
    isEditMode: boolean;
    isOverview?: boolean;
    onClickPreview?: React.MouseEventHandler<HTMLDivElement>;
    onClickActions?: (id: string) => void;
}

const PortfolioPreview: React.FC<Props> = ({
    portfolio,
    showPortfolioActionsId,
    isEditMode,
    isOverview = false,
    onClickPreview,
    onClickActions
}) => {
    const dispatch = useAppDispatch();

    const isShowActions = showPortfolioActionsId === portfolio.id;

    const handleOnDeletePortfolio = async () => {
        await dispatch(deletePortfolio(portfolio.id as string));
    }

    const handleOnClickActions = () => {
        if (onClickActions !== undefined) {
            if (showPortfolioActionsId === '' || showPortfolioActionsId !== portfolio.id) {
                onClickActions(portfolio.id as string);
            } else {
                onClickActions('');
            }
        }
    }

    useEffect(() => {
        if (onClickActions !== undefined) {
            if (!isEditMode) {
                onClickActions('');
            }
        }
    }, [isEditMode]);
    
    return (
        <div className="portfolio-preview-wrapper">
            <div className="portfolio-preview" onClick={onClickPreview}>
                <InfoBlock topRow={portfolio.name} bottomRow={`$${portfolio.totalSum}`}/>
            </div>
            {(!isOverview && isEditMode) &&
                <div className="portfolio-list-actions-wrapper">
                    <IconButton className="icon-button" name={IconName.ELLIPSIS} onClick={handleOnClickActions}/>
                    {isShowActions &&
                        <div className="portfolio-list-actions">
                            <IconButton className="icon-button" name={IconName.EDIT} label={'Edit'} />
                            <IconButton className="icon-button" name={IconName.DELETE} label={'Delete'} onClick={handleOnDeletePortfolio}/>
                        </div>
                    }
                </div>
            }
        </div>
    );
}

export { PortfolioPreview };

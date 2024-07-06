import { useEffect, useState } from "react";
import { useAppDispatch } from "../../../../../../hooks/hooks";
import { 
    InfoBlock, 
    IconButton, 
    Icon,
    Promt
} from "../../../../../../components/components";
import { Portfolio } from "../../../../../../common/types/types";
import { IconName } from "../../../../../../common/enums/enums";
import { deletePortfolio } from "../../../../../../store/portfolio/actions";
import './PortfolioPreview.css';

type Props = {
    portfolio: Portfolio;
    showPortfolioActionsId: string; 
    isEditMode: boolean;
    isOverview?: boolean;
    onClickPreview?: React.MouseEventHandler<HTMLDivElement>;
    onClickActions?: (id: string) => void;
    onOpenUpdatePortfolio?: React.MouseEventHandler<HTMLLIElement>;
}

const PortfolioPreview: React.FC<Props> = ({
    portfolio,
    showPortfolioActionsId,
    isEditMode,
    isOverview = false,
    onClickPreview,
    onClickActions,
    onOpenUpdatePortfolio
}) => {
    const dispatch = useAppDispatch();

    const isShowActions = showPortfolioActionsId === portfolio.id;
    const [isDeletePortfolio, setIsDeletePortfolio] = useState<boolean>(false);

    const handleOnDeletePortfolio = async () => {
        await dispatch(deletePortfolio(portfolio.id as string));
    }

    const handleOnOpenDeletePortfolioPromt = () => {
        setIsDeletePortfolio(true);
    }

    const handleOnCloseDeletePortfolioPromt = () => {
        setIsDeletePortfolio(false);
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
        <>
            <div className="portfolio-preview">
                <div className="portfolio-preview__content" onClick={onClickPreview}>
                    <InfoBlock topRow={portfolio.name} bottomRow={`$${portfolio.totalSum}`}/>
                </div>
                {(!isOverview && isEditMode) &&
                    <div className="portfolio-preview__list-actions">
                        <IconButton className="icon-button" name={IconName.ELLIPSIS} onClick={handleOnClickActions} />
                        {isShowActions &&
                            <ul className="portfolio-preview__list-actions-content">
                                <li className="portfolio-preview__action" onClick={onOpenUpdatePortfolio}>
                                    <Icon 
                                        className="icon" 
                                        name={IconName.EDIT} 
                                    />
                                    <span>Edit</span>
                                </li>
                                <li className="portfolio-preview__action" onClick={handleOnOpenDeletePortfolioPromt}>
                                    <Icon 
                                        className="icon" 
                                        name={IconName.DELETE} 
                                    />
                                    <span>Delete</span>
                                </li>
                            </ul>
                        }
                    </div>
                }
            </div>
            {isDeletePortfolio && (
                <Promt
                    topic="Delete portfolio"
                    text="Are you sure you want to delete your portfolio?"
                    onCancel={handleOnCloseDeletePortfolioPromt}
                    onOk={handleOnDeletePortfolio}
                />
            )}
        </>
    );
}

export { PortfolioPreview };

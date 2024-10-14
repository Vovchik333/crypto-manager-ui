import { useState } from "react";
import { useAppDispatch } from "@/lib/hooks";
import { 
    InfoBlock, 
    IconButton, 
    Promt
} from "@/lib/components";
import { Portfolio } from "@/common/types";
import { IconName } from "@/lib/enums/components";
import { deletePortfolio } from "@/store/portfolio/actions";
import styles from './styles.module.scss';
import { PortfolioActionList } from "./components";

type Props = {
    portfolio: Portfolio;
    isEditMode: boolean;
    onClickPreview: React.MouseEventHandler<HTMLDivElement>;
    onOpenUpdatePortfolio: (id: string) => void;
}

const PortfolioPreview: React.FC<Props> = ({
    portfolio,
    isEditMode,
    onClickPreview,
    onOpenUpdatePortfolio
}) => {
    const dispatch = useAppDispatch();

    const [isShowActions, setIsShowActions] = useState(false);
    const [isDeletePortfolio, setIsDeletePortfolio] = useState<boolean>(false);

    const handleDeletePortfolio = async () => {
        await dispatch(deletePortfolio(portfolio._id as string));
        setIsShowActions(false);
    }

    const handleOpenDeletePortfolioPromt = () => setIsDeletePortfolio(true);

    const handleCloseDeletePortfolioPromt = () => setIsDeletePortfolio(false);

    const handleOpenActions = () => {
        setIsShowActions(true);
    }

    const handleCloseActions = () => {
        setIsShowActions(false);
    }
    
    return (
        <>
            <div className={styles['portfolio-preview']}>
                <section 
                    className={styles['portfolio-preview__content']} 
                    onClick={onClickPreview}
                >
                    <InfoBlock 
                        topRow={portfolio.name} 
                        bottomRow={`$${portfolio.totalSum}`}
                    />
                </section>
                {isEditMode && (
                    <section className={styles['portfolio-preview__list-actions']}>
                        <IconButton 
                            name={IconName.ELLIPSIS} 
                            onClick={handleOpenActions} 
                        />
                    </section>
                )}
            </div>
            {isShowActions &&
                <PortfolioActionList
                    onOpenUpdatePortfolio={() => onOpenUpdatePortfolio(portfolio._id)}
                    onOpenDeletePortfolioPromt={handleOpenDeletePortfolioPromt}
                    onClose={handleCloseActions}
                />
            }
            {isDeletePortfolio && (
                <Promt
                    topic="Delete portfolio"
                    text="Are you sure you want to delete your portfolio?"
                    onCancel={handleCloseDeletePortfolioPromt}
                    onOk={handleDeletePortfolio}
                />
            )}
        </>
    );
}

export { PortfolioPreview };

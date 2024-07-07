import { useState } from "react";
import { IconName } from "../../../../common/enums/enums";
import { Portfolio } from "../../../../common/types/types";
import { 
    Button, 
    IconButton, 
    InfoBlock
} from "../../../../components/components";
import { PortfolioPreview } from "./components/components";
import './PortfoliosSelection.css';

type Props = {
    portfolios: Portfolio[];
    onSelectPortfolioId: (id: string) => React.MouseEventHandler<HTMLDivElement>;
    onOpenUpdatePortfolio: (id: string) => React.MouseEventHandler<HTMLLIElement>;
    onOpenCreatePortfolio: React.MouseEventHandler<HTMLButtonElement>;
}

const PortfoliosSelection: React.FC<Props> = ({
    portfolios,
    onSelectPortfolioId,
    onOpenUpdatePortfolio,
    onOpenCreatePortfolio
}) => {
    const [editPortfolioMode, setEditPortfolioMode] = useState<boolean>(false);
    const [showPortfolioActionsId, setShowPortfolioActionsId] = useState<string>('');

    const overviewPortfolios = {
        name: 'Overview',
        totalSum: portfolios.reduce((acc, cur) => acc + cur.totalSum, 0)
    };

    const handleOnEditPortfolioMode = () => {
        setEditPortfolioMode(!editPortfolioMode);
    }

    const handleOnClickActions = (id: string) => {
        setShowPortfolioActionsId(id);
    }

    return (
        <aside className="portfolios-selection">
            <section className="portfolios-selection__overview main-box">
                <InfoBlock 
                    topRow={overviewPortfolios.name} 
                    bottomRow={`$${overviewPortfolios.totalSum}`}
                />
            </section>
            <section className="portfolios-selection__count">
                <span>My portfolios ({portfolios.length})</span>
                <IconButton 
                    className="icon-button" 
                    name={editPortfolioMode ? IconName.CHECK : IconName.PEN} 
                    onClick={handleOnEditPortfolioMode}
                />
            </section>
            <ul className="portfolios-selection__items">
                {portfolios.map((portfolio) => {
                    return (
                        <li 
                            key={portfolio.id}
                            className="portfolios-selection__item main-box"
                        >
                            <PortfolioPreview 
                                portfolio={portfolio} 
                                showPortfolioActionsId={showPortfolioActionsId} 
                                isEditMode={editPortfolioMode}
                                onClickPreview={onSelectPortfolioId(portfolio.id as string)}
                                onClickActions={handleOnClickActions} 
                                onOpenUpdatePortfolio={onOpenUpdatePortfolio(portfolio.id as string)}
                            />
                        </li>
                    );
                })}
            </ul>
            <Button 
                className="button secondary-button create-portfolio-button" 
                onClick={onOpenCreatePortfolio}
            >+ Create portfolio</Button>
        </aside>
    );
}

export { PortfoliosSelection };

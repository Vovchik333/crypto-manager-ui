import { memo, useState } from "react";
import { Portfolio } from "@/common/types";
import { Button } from "@/lib/components";
import { PortfolioPreview, PortfoliosCount, PortfoliosOverview } from "./components";
import styles from './styles.module.scss';

type Props = {
    portfolios: Portfolio[];
    onSelectPortfolioId: (id: string) => React.MouseEventHandler<HTMLDivElement>;
    onOpenUpdatePortfolio: (id: string) => void;
    onOpenCreatePortfolio: React.MouseEventHandler<HTMLButtonElement>;
}

const PortfoliosSelection: React.FC<Props> = memo(({
    portfolios,
    onSelectPortfolioId,
    onOpenUpdatePortfolio,
    onOpenCreatePortfolio
}) => {
    const [editPortfolioMode, setEditPortfolioMode] = useState<boolean>(false);

    const handleEditPortfolioMode = () => {
        setEditPortfolioMode(!editPortfolioMode);
    }

    return (
        <aside className={styles['portfolios-selection']}>
            <PortfoliosOverview 
                portfolios={portfolios}
            />
            <PortfoliosCount 
                portfolios={portfolios}
                editMode={editPortfolioMode}
                onToggleEditMode={handleEditPortfolioMode}
            />
            <ul 
                className={styles['portfolios-selection__items']}
            >
                {portfolios.map((portfolio) => {
                    return (
                        <li 
                            key={portfolio._id}
                            className={styles['portfolios-selection__item']}
                        >
                            <PortfolioPreview 
                                portfolio={portfolio} 
                                isEditMode={editPortfolioMode}
                                onClickPreview={onSelectPortfolioId(portfolio._id as string)}
                                onOpenUpdatePortfolio={onOpenUpdatePortfolio}
                            />
                        </li>
                    );
                })}
            </ul>
            <Button 
                className={styles['create-portfolio-button']} 
                onClick={onOpenCreatePortfolio}
                isSecondary
            >+ Create portfolio</Button>
        </aside>
    );
});

export { PortfoliosSelection };

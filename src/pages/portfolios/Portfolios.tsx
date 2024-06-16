import { 
    useEffect, 
    useState 
} from "react";
import { 
    useAppDispatch, 
    useAppSelector 
} from "../../hooks/hooks";
import { 
    Button, 
    IconButton 
} from "../../components/components";
import { 
    AssetTable, 
    PortfolioPreview,
    CreatePortfolio, 
    UpdatePortfolio
} from "./components/components";
import { Portfolio } from "../../common/types/types";
import { IconName } from "../../common/enums/enums";
import { loadPortfolios } from "../../store/portfolio/actions";
import './Portfolios.css';

const Portfolios: React.FC = () => {
    const dispatch = useAppDispatch();
    const portfolios = useAppSelector(state => state.portfolio.portfolios);

    const [selectedPortfolioId, setSelectedPortfolioId] = useState<string | null>(null);
    const [portfolioIdForUpdate, setPortfolioIdForUpdate] = useState<string | null>(null);
    const [editPortfolioMode, setEditPortfolioMode] = useState<boolean>(false);
    const [createPortfolioVisibility, setCreatePortfolioVisibility] = useState<boolean>(false);
    const [showPortfolioActionsId, setShowPortfolioActionsId] = useState<string>('');

    const overviewPortfolios = {
        name: 'Overview',
        totalSum: portfolios.reduce((acc, cur) => acc + cur.totalSum, 0)
    };

    const handleSelectPortfolioId = (id: string) => {
        return () => setSelectedPortfolioId(id);
    };

    const handleOnOpenCreatePortfolio = () => {
        setCreatePortfolioVisibility(true);
    }

    const handleOnCloseCreatePortfolio = () => {
        setCreatePortfolioVisibility(false);
    }

    const handleOnOpenUpdatePortfolio = (id: string) => {
        return () => setPortfolioIdForUpdate(id);
    }

    const handleOnCloseUpdatePortfolio = () => {
        setPortfolioIdForUpdate(null);
    }

    const handleOnEditPortfolioMode = () => {
        setEditPortfolioMode(!editPortfolioMode);
    }

    const handleOnClickActions = (id: string) => {
        setShowPortfolioActionsId(id);
    }

    const selectedPortfolio = portfolios.find(portfolio => portfolio.id === selectedPortfolioId) as Portfolio;
    const portfolioForUpdate = portfolios.find(portfolio => portfolio.id === portfolioIdForUpdate) as Portfolio;

    useEffect(() => {
        const initPortfolios = async () => {
            await dispatch(loadPortfolios());
            setSelectedPortfolioId(portfolios[0].id as string);
        }

        initPortfolios();
    }, []);

    return (
        <>
            <main className="portfolios-page roboto-regular">
                <aside className="portfolios-selection">
                    <PortfolioPreview 
                        portfolio={overviewPortfolios as Portfolio}
                        showPortfolioActionsId={showPortfolioActionsId} 
                        isOverview={true} 
                        isEditMode={editPortfolioMode}
                    />
                    <section className="portfolios-count">
                        <span>My portfolios ({portfolios.length})</span>
                        <IconButton 
                            className="icon-button" 
                            name={editPortfolioMode ? IconName.CHECK : IconName.PEN} 
                            onClick={handleOnEditPortfolioMode}
                        />
                    </section>
                    <ul className="portfolios">
                        {portfolios.map((portfolio) => {
                            return (
                                <li key={portfolio.id}>
                                    <PortfolioPreview 
                                        portfolio={portfolio} 
                                        showPortfolioActionsId={showPortfolioActionsId} 
                                        isEditMode={editPortfolioMode}
                                        onClickPreview={handleSelectPortfolioId(portfolio.id as string)}
                                        onClickActions={handleOnClickActions} 
                                        onOpenUpdatePortfolio={handleOnOpenUpdatePortfolio(portfolio.id as string)}
                                    />
                                </li>
                            );
                        })}
                    </ul>
                    <Button className="create-portfolio-btn normal-btn" onClick={handleOnOpenCreatePortfolio}>
                        + Create portfolio
                    </Button>
                </aside>
                {Boolean(selectedPortfolio) &&
                    <section className="portfolio-info">
                        <section className="stats">
                            <div className="stats-left-side">
                                <p>{selectedPortfolio.name}</p>
                                <h2>Total value: </h2>
                                <strong>${selectedPortfolio.assets.reduce((acc, cur) => acc + (cur.holdings * cur.price), 0)}</strong>
                            </div>
                            <div className="stats-right-side">
                                <Button className="normal-btn"> + Add transaction </Button>
                            </div>
                        </section>
                        <AssetTable assets={selectedPortfolio.assets} />
                    </section>
                }
            </main>
            {createPortfolioVisibility && (
                <CreatePortfolio 
                    onClose={handleOnCloseCreatePortfolio}
                />
            )}
            {Boolean(portfolioForUpdate) && (
                <UpdatePortfolio 
                    portfolio={portfolioForUpdate}  
                    onClose={handleOnCloseUpdatePortfolio}
                />
            )}
            
        </>
    );
};

export { Portfolios };

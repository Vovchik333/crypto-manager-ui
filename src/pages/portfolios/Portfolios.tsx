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
    PortfolioForm, 
    PortfolioPreview 
} from "./components/components";
import { Portfolio } from "../../common/types/types";
import { IconName } from "../../common/enums/enums";
import { loadPortfolios } from "../../store/portfolio/actions";
import './Portfolios.css';

const Portfolios: React.FC = () => {
    const dispatch = useAppDispatch();
    const portfolios = useAppSelector(state => state.portfolio.portfolios);

    const [selectedPortfolio, setSelectedPortfolio] = useState<Portfolio>(portfolios[0]);
    const [editPortfolioMode, setEditPortfolioMode] = useState<boolean>(false);
    const [visibility, setVisibility] = useState<boolean>(true);
    const [showPortfolioActionsId, setShowPortfolioActionsId] = useState<string>('');

    const overviewPortfolios = {
        name: 'Overview',
        totalSum: portfolios.reduce((acc, cur) => acc + cur.totalSum, 0)
    };

    const handleSelectPortfolio = (portfolio: Portfolio) => {
        return () => setSelectedPortfolio(portfolio);
    };

    const handleOnOpen = () => {
        setVisibility(false);
    }

    const handleOnClose = () => {
        setVisibility(true);
    }

    const handleOnEditPortfolio = () => {
        setEditPortfolioMode(!editPortfolioMode);
    }

    const handleOnClickActions = (id: string) => {
        setShowPortfolioActionsId(id);
    }

    useEffect(() => {
        
        dispatch(loadPortfolios());
        setSelectedPortfolio(portfolios[0]);
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
                        <IconButton className="icon-button" name={editPortfolioMode ? IconName.CHECK : IconName.PEN} onClick={handleOnEditPortfolio}/>
                    </section>
                    <ul className="portfolios">
                        {portfolios.map((portfolio) => {
                            return (
                                <li key={portfolio.id}>
                                    <PortfolioPreview 
                                        portfolio={portfolio} 
                                        showPortfolioActionsId={showPortfolioActionsId} 
                                        isEditMode={editPortfolioMode}
                                        onClickPreview={handleSelectPortfolio(portfolio)}
                                        onClickActions={handleOnClickActions} 
                                    />
                                </li>
                            );
                        })}
                    </ul>
                    <Button className="create-portfolio-btn normal-btn" onClick={handleOnOpen}>
                        + Create portfolio
                    </Button>
                </aside>
                {Boolean(selectedPortfolio) &&
                    <section className="portfolio-info">
                        <section className="stats">
                            <div className="stats-left-side">
                                <span>{selectedPortfolio.name}</span>
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
            <PortfolioForm hidden={visibility} onClose={handleOnClose}></PortfolioForm>
        </>
    );
};

export { Portfolios };

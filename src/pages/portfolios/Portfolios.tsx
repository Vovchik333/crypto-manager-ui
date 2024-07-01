import { 
    useEffect, 
    useState 
} from "react";
import { 
    useAppDispatch, 
    useAppSelector 
} from "../../hooks/hooks";
import { Spinner } from "../../components/components";
import { 
    CreatePortfolio, 
    UpdatePortfolio,
    AddTransaction,
    PortfolioInfo,
    PortfoliosSelection
} from "./components/components";
import { Portfolio } from "../../common/types/types";
import { loadPortfolios } from "../../store/portfolio/actions";
import './Portfolios.css';

const Portfolios: React.FC = () => {
    const dispatch = useAppDispatch();
    const portfolios = useAppSelector(state => state.portfolio.portfolios);

    const [isPageLoad, setIsPageLoad] = useState<boolean>(false);
    const [selectedPortfolioId, setSelectedPortfolioId] = useState<string | null>(null);
    const [updatePortfolioId, setUpdatePortfolioId] = useState<string | null>(null);
    const [isCreatePortfolio, setIsCreatePortfolio] = useState<boolean>(false);
    const [isAddTransaction, setIsAddTransaction] = useState<boolean>(false);

    const handleOnSelectPortfolioId = (id: string) => {
        return () => setSelectedPortfolioId(id);
    };

    const handleOnOpenCreatePortfolio = () => {
        setIsCreatePortfolio(true);
    }

    const handleOnCloseCreatePortfolio = () => {
        setIsCreatePortfolio(false);
    }

    const handleOnOpenUpdatePortfolio = (id: string) => {
        return () => setUpdatePortfolioId(id);
    }

    const handleOnCloseUpdatePortfolio = () => {
        setUpdatePortfolioId(null);
    }

    const handleOnOpenAddTransaction = () => {
        setIsAddTransaction(true);
    }

    const handleOnCloseAddTransaction = () => {
        setIsAddTransaction(false);
    }

    const selectedPortfolio = portfolios.find(portfolio => portfolio.id === selectedPortfolioId) as Portfolio;
    const portfolioForUpdate = portfolios.find(portfolio => portfolio.id === updatePortfolioId) as Portfolio;

    useEffect(() => {
        const initPortfolios = async () => {
            await dispatch(loadPortfolios());        
            setSelectedPortfolioId(portfolios[0].id as string);
            setIsPageLoad(true);
        }

        initPortfolios();
    }, []);

    if (!isPageLoad) {
        return (<Spinner />);
    }

    return (
        <>
            <main className="portfolios-page">
                <PortfoliosSelection 
                    portfolios={portfolios}
                    onOpenCreatePortfolio={handleOnOpenCreatePortfolio}
                    onOpenUpdatePortfolio={handleOnOpenUpdatePortfolio}
                    onSelectPortfolioId={handleOnSelectPortfolioId}
                />
                {Boolean(selectedPortfolio) &&
                    <PortfolioInfo 
                        portfolio={selectedPortfolio} 
                        onOpenAddTransaction={handleOnOpenAddTransaction}
                    />
                }
            </main>
            {isCreatePortfolio && (
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
            {isAddTransaction && (
                <AddTransaction onClose={handleOnCloseAddTransaction} />
            )}
        </>
    );
};

export { Portfolios };

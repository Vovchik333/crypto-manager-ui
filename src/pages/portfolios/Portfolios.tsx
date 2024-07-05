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
    PortfoliosSelection,
    TransactionsInfo,
} from "./components/components";
import { Portfolio } from "../../common/types/types";
import { loadPortfolios } from "../../store/portfolio/actions";
import { loadAssets } from "../../store/asset/actions";
import './Portfolios.css';

const Portfolios: React.FC = () => {
    const dispatch = useAppDispatch();
    const { portfolios } = useAppSelector(state => state.portfolio);
    const { assets } = useAppSelector(state => state.asset);

    const [isPageLoad, setIsPageLoad] = useState<boolean>(false);
    const [selectedPortfolioId, setSelectedPortfolioId] = useState<string | null>(null);
    const [updatePortfolioId, setUpdatePortfolioId] = useState<string | null>(null);
    const [isCreatePortfolio, setIsCreatePortfolio] = useState<boolean>(false);
    const [isAddTransaction, setIsAddTransaction] = useState<boolean>(false);
    const [selectedAssetId, setSelectedAssetId] = useState<string | null>(null);

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

    const handleOnSelectAssetId = (value: string | null) => {
        return () => setSelectedAssetId(value);
    }

    const selectedPortfolio = portfolios.find(portfolio => portfolio.id === selectedPortfolioId) as Portfolio;
    const portfolioForUpdate = portfolios.find(portfolio => portfolio.id === updatePortfolioId) as Portfolio;

    useEffect(() => {
        const initPortfolios = async () => {
            await dispatch(loadPortfolios());   
            await dispatch(loadAssets());  
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
                {Boolean(selectedPortfolio) && (
                    (selectedAssetId === null) ? (
                        <PortfolioInfo 
                            portfolio={selectedPortfolio} 
                            assets={assets}
                            onOpenAddTransaction={handleOnOpenAddTransaction}
                            onSelectAssetId={handleOnSelectAssetId}
                        />
                    ) : (
                        <TransactionsInfo 
                            assets={assets} 
                            selectedAssetId={selectedAssetId}
                            onOpenAddTransaction={handleOnOpenAddTransaction}
                            onBackToPortfolio={handleOnSelectAssetId(null)}
                        />
                    )
                )}
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
                <AddTransaction 
                    portfolioId={selectedPortfolioId as string}
                    assets={assets}
                    onClose={handleOnCloseAddTransaction} 
                />
            )}
        </>
    );
};

export { Portfolios };

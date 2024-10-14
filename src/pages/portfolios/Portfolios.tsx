import { 
    useCallback,
    useEffect, 
    useState 
} from "react";
import { 
    useAppDispatch, 
    useAppSelector 
} from "@/lib/hooks";
import { NotFound, Spinner } from "@/lib/components";
import { 
    CreatePortfolio, 
    UpdatePortfolio,
    AddTransaction,
    PortfolioInfo,
    PortfoliosSelection,
    TransactionsInfo
} from "./components";
import { Asset, Portfolio } from "@/common/types";
import { loadPortfolios } from "@/store/portfolio/actions";
import styles from './styles.module.scss';

const Portfolios: React.FC = () => {
    const dispatch = useAppDispatch();
    const portfolioState = useAppSelector(state => state.portfolio);

    const [selectedPortfolioId, setSelectedPortfolioId] = useState<string | null>(null);
    const [updatePortfolioId, setUpdatePortfolioId] = useState<string | null>(null);
    const [isCreatePortfolio, setIsCreatePortfolio] = useState<boolean>(false);
    const [isAddTransaction, setIsAddTransaction] = useState<boolean>(false);
    const [selectedAssetId, setSelectedAssetId] = useState<string | null>(null);

    const { portfolios } = portfolioState;

    const selectedPortfolio = portfolios.find(portfolio => portfolio._id === selectedPortfolioId) as Portfolio;
    const portfolioForUpdate = portfolios.find(portfolio => portfolio._id === updatePortfolioId) as Portfolio;
    const selectedAsset = selectedPortfolio?.assets.find(asset => asset._id === selectedAssetId) as Asset;

    const handleSelectPortfolioId = useCallback((id: string) => {
        return () => setSelectedPortfolioId(id);
    }, []);

    const handleOpenCreatePortfolio = useCallback(() => {
        setIsCreatePortfolio(true)
    }, []);

    const handleCloseCreatePortfolio = () => {
        setIsCreatePortfolio(false);
    }

    const handleOpenUpdatePortfolio = useCallback((id: string) => {
        setUpdatePortfolioId(id);
    }, []);

    const handleCloseUpdatePortfolio = () => setUpdatePortfolioId(null);

    const handleOpenAddTransaction = useCallback(() => {
        setIsAddTransaction(true)
    }, []);

    const handleCloseAddTransaction = () => {
        setIsAddTransaction(false);
    };

    const handleSelectAssetId = useCallback((id: string | null) => {
        setSelectedAssetId(id);
    }, []);

    const handleBackToPortfolio = useCallback(() => {
        setSelectedAssetId(null)
    }, []);

    useEffect(() => {
        if (portfolios.length > 0 && selectedPortfolioId === null) {
            setSelectedPortfolioId(portfolios[0]._id);
        }
    }, [portfolioState.portfolios]);

    useEffect(() => {
        dispatch(loadPortfolios());
    }, []);

    if (!portfolioState.isLoaded) {
        return <Spinner />;
    }

    return (
        <>
            <main className={styles['portfolios-page']}>
                <PortfoliosSelection 
                    portfolios={portfolios}
                    onOpenCreatePortfolio={handleOpenCreatePortfolio}
                    onOpenUpdatePortfolio={handleOpenUpdatePortfolio}
                    onSelectPortfolioId={handleSelectPortfolioId}
                />
                {Boolean(selectedPortfolio) ? (
                    (selectedAssetId === null) ? (
                        <PortfolioInfo 
                            portfolio={selectedPortfolio} 
                            onOpenAddTransaction={handleOpenAddTransaction}
                            onSelectAssetId={handleSelectAssetId}
                        />
                    ) : (
                        <TransactionsInfo 
                            asset={selectedAsset}
                            onOpenAddTransaction={handleOpenAddTransaction}
                            onBackToPortfolio={handleBackToPortfolio}
                        />
                    )
                ) : (
                    <NotFound>Portfolios not found.</NotFound>
                )}
            </main>
            {isCreatePortfolio && (
                <CreatePortfolio 
                    onClose={handleCloseCreatePortfolio}
                />
            )}
            {Boolean(portfolioForUpdate) && (
                <UpdatePortfolio 
                    portfolio={portfolioForUpdate}  
                    onClose={handleCloseUpdatePortfolio}
                />
            )}
            {isAddTransaction && (
                <AddTransaction 
                    portfolio={selectedPortfolio}
                    onClose={handleCloseAddTransaction} 
                />
            )}
        </>
    );
};

export { Portfolios };

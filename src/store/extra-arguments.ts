import { 
    assetService,
    authService, 
    portfolioService,
    transactionService
} from "@/services";

type ExtraArguments = {
    authService: typeof authService;
    portfolioService: typeof portfolioService;
    assetService: typeof assetService;
    transactionService: typeof transactionService;
};

const extraArguments: ExtraArguments = {
    authService,
    portfolioService,
    assetService,
    transactionService
};

export { extraArguments };

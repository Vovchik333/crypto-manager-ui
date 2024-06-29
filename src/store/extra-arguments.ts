import { 
    authService, 
    portfolioService, 
    transactionService 
} from "../services/services";

type ExtraArguments = {
    authService: typeof authService;
    portfolioService: typeof portfolioService;
    transactionService: typeof transactionService;
};

const extraArguments: ExtraArguments = {
    authService,
    portfolioService,
    transactionService
};

export { extraArguments };

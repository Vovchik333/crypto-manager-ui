import { 
    assetService,
    authService, 
    portfolioService
} from "../services/services";

type ExtraArguments = {
    authService: typeof authService;
    portfolioService: typeof portfolioService;
    assetService: typeof assetService;
};

const extraArguments: ExtraArguments = {
    authService,
    portfolioService,
    assetService
};

export { extraArguments };

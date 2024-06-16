import { authService, portfolioService } from "../services/services";

type ExtraArguments = {
    authService: typeof authService;
    portfolioService: typeof portfolioService;
}

const extraArguments: ExtraArguments = {
    authService,
    portfolioService
}

export { extraArguments };
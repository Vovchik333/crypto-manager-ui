import { httpApi } from "@/lib/services/http";
import AssetService from "./asset/asset.service";
import AuthService from "./auth/auth.service";
import PortfolioService from "./portfolio/portfolio.service";
import TransactionService from "./transaction/transaction.service";
import { API_ORIGIN, API_PORT } from "@/common/constants";
import { ApiPath } from "@/common/enums";
import { CoinService } from "./coin/coin.service";

const API_PATH = `${API_ORIGIN}:${API_PORT}${ApiPath.API}`;

const authService = new AuthService({
    apiPath: API_PATH,
    httpApi
});
const portfolioService = new PortfolioService({
    apiPath: API_PATH,
    httpApi
});
const assetService = new AssetService({
    apiPath: API_PATH,
    httpApi
});
const transactionService = new TransactionService({
    apiPath: API_PATH,
    httpApi
});
const coinService = new CoinService({
    apiPath: API_PATH,
    httpApi
});

export { 
    authService,
    portfolioService,
    assetService,
    transactionService,
    coinService
};

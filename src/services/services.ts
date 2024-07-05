import AssetService from "./asset/asset-service";
import AuthService from "./auth/auth.service";
import CoinGeckoService from "./coingecko/coingecko.service";
import HttpApi from "./http/http-api.service";
import PortfolioService from "./portfolio/portfolio.service";

const httpApi = new HttpApi();
const authService = new AuthService();
const portfolioService = new PortfolioService();
const assetService = new AssetService();
const coinGeckoService = new CoinGeckoService({
    apiPath: 'https://api.coingecko.com/api/v3',
    httpApi
});

export { 
    authService,
    portfolioService,
    coinGeckoService,
    assetService
};

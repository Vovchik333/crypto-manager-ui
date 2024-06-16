import AuthService from "./auth/auth.service";
import BinanceService from "./binance/binance.service";
import HttpApi from "./http/http-api.service";
import PortfolioService from "./portfolio/portfolio.service";

const httpApi = new HttpApi();
const authService = new AuthService();
const portfolioService = new PortfolioService();
const binanceService = new BinanceService({
    apiPath: 'https://api.binance.com',
    httpApi
});

export { 
    authService,
    portfolioService,
    binanceService
};

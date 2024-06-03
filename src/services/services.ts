import AuthService from "./auth/auth.service";
import BinanceService from "./binance/binance.service";
import HttpApi from "./http/http-api.service";

const httpApi = new HttpApi();
const authService = new AuthService();
const binanceService = new BinanceService({
    apiPath: 'https://api.binance.com',
    httpApi
});


export { 
    authService,
    binanceService
};
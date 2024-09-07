import { Portfolio } from "./portfolio.type";

type PortfolioRequestData = Omit<Portfolio, '_id' | 'totalSum' | 'userId' | 'assets'>;

export { type PortfolioRequestData };

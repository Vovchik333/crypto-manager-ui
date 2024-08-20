import { Portfolio } from "./portfolio.type";

type PortfolioRequestData = Omit<Portfolio, 'id' | 'totalSum'>;

export { type PortfolioRequestData };

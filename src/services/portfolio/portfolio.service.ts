import { Portfolio } from "../../common/types/portfolio/portfolio.type";
import portfoliosJson from "../../assets/data/portfolios.json";

class PortfolioService {
    constructor() {
        
    }

    public async getAll(): Promise<Portfolio[]> {
        const portfolios = portfoliosJson;

        return portfolios;
    }

    public async create(payload: Portfolio): Promise<Portfolio | never> {
        payload.id = Math.random().toString();
        return payload;
    }

    public async updateOne(payload: Partial<Portfolio>): Promise<Portfolio | never> {
        return payload as Portfolio;
    }

    public async deleteOne(id: string): Promise<string | never> {
        return id;
    }
}

export default PortfolioService;

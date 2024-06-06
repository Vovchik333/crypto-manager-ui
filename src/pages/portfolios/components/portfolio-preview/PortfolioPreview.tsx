import { Portfolio } from "../../../../common/types/portfolio/portfolio.type";
import './PortfolioPreview.css';

type Props = {
    portfolio: Portfolio;
    onClick?: () => void
}

const PortfolioPreview: React.FC<Props> = ({
    portfolio,
    onClick
}) => {
    return (
        <div className="portfolio-preview" onClick={onClick}>
            <strong className="portfolio-name">{portfolio.name}</strong>
            <small className="portfolio-total-sum">${portfolio.totalSum}</small>
        </div>
    );
}

export { PortfolioPreview };
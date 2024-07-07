import { Button } from "../../../../components/components";
import './Stats.css';

type Props = {
    name: string;
    totalSum: number;
    onOpenAddTransaction: React.MouseEventHandler<HTMLButtonElement>;
}

const Stats: React.FC<Props> = ({
    name,
    totalSum,
    onOpenAddTransaction
}) => {
    return (
        <section className="stats">
            <div className="stats__side">
                <p className="stats__portfolio-name stats__item">{name}</p>
                <h2 className="stats__total-header stats__item">Total value: </h2>
                <strong className="stats__total-sum stats__item">${totalSum}</strong>
            </div>
            <div className="stats__side">
                <Button 
                    className="button secondary-button" 
                    onClick={onOpenAddTransaction}
                > + Add transaction </Button>
            </div>
        </section>
    );
}

export { Stats };

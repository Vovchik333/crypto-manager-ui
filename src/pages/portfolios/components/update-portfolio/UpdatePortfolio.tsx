import { 
    ChangeEvent, 
    useState 
} from "react";
import { 
    Button, 
    Input 
} from "../../../../components/components";
import { PortfolioForm } from "../components";
import { ButtonType } from "../../../../common/enums/enums";
import { useAppDispatch } from "../../../../hooks/hooks";
import { updatePortfolio } from "../../../../store/portfolio/actions";
import './UpdatePortfolio.css';
import { Portfolio } from "../../../../common/types/types";

type Props = {
    portfolio: Portfolio;
    onClose: () => void;
}

const UpdatePortfolio: React.FC<Props> = ({
    portfolio,
    onClose
}) => {
    const dispatch = useAppDispatch();
    const [name, setName] = useState('');

    const handleOnChangeName = (event: ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    }

    const handleOnSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        
        if (name.length) {
            await dispatch(updatePortfolio({ ...portfolio, name }));
            setName('');
            onClose();
        }
    }

    return (
        <PortfolioForm hidden={false} topic="Edit portfolio" onClose={onClose}>
            <form className="update-portfolio-form" method="post" action="" onSubmit={handleOnSubmit}>
                <div className='update-portfolio-inputs'>
                    <label className='update-portfolio-name-label' htmlFor="portfolio-name-input">New name:</label>
                    <Input className='normal-input' id='portfolio-name-input' value={name} onChange={handleOnChangeName} />
                </div>
                <div className='update-portfolio-btn-wrapper'>
                    <Button className='update-portfolio-btn normal-btn' type={ButtonType.SUBMIT}>Update</Button>
                </div>
            </form>
        </PortfolioForm>
    );
}

export { UpdatePortfolio };

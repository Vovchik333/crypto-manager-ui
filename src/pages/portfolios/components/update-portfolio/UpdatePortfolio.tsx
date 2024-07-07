import { 
    ChangeEvent, 
    useState 
} from "react";
import { 
    Button, 
    Input,
    FormTemplate 
} from "../../../../components/components";
import { ButtonType } from "../../../../common/enums/enums";
import { useAppDispatch } from "../../../../hooks/hooks";
import { updatePortfolio } from "../../../../store/portfolio/actions";
import { Portfolio } from "../../../../common/types/types";
import './UpdatePortfolio.css';

type Props = {
    portfolio: Portfolio;
    onClose: () => void;
}

const UpdatePortfolio: React.FC<Props> = ({
    portfolio,
    onClose
}) => {
    const dispatch = useAppDispatch();
    const [name, setName] = useState(portfolio.name);

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
        <FormTemplate topic="Edit portfolio" onClose={onClose}>
            <form className="update-portfolio" method="post" onSubmit={handleOnSubmit}>
                <label 
                    className='update-portfolio__name-label' 
                    htmlFor="portfolio-name-input"
                >New name:</label>
                <Input 
                    className='input' 
                    id='portfolio-name-input' 
                    value={name} 
                    onChange={handleOnChangeName} 
                />
                <Button 
                    className='button primary-button update-portfolio__submit-button' 
                    type={ButtonType.SUBMIT}
                >Update</Button>
            </form>
        </FormTemplate>
    );
}

export { UpdatePortfolio };

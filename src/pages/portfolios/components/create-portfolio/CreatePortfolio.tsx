import { ChangeEvent, useState } from "react";
import { 
    Button, 
    Input, 
    FormTemplate
} from "../../../../components/components";
import { ButtonType } from "../../../../common/enums/enums";
import { useAppDispatch } from "../../../../hooks/hooks";
import { createPortfolio } from "../../../../store/portfolio/actions";
import './CreatePortfolio.css';

type Props = {
    onClose: () => void;
}

const CreatePortfolio: React.FC<Props> = ({
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
            await dispatch(createPortfolio({ name, totalSum: 0.0, assets: [] }));
            setName('');
            onClose();
        }
    }

    return (
        <FormTemplate topic="Creating a new portfolio" onClose={onClose}>
            <form className="create-portfolio" method="post" action="" onSubmit={handleOnSubmit}>
                <label 
                    className='create-portfolio__name-label' 
                    htmlFor="portfolio-name-input"
                >Name: </label>
                <Input 
                    className='input' 
                    id='portfolio-name-input' 
                    value={name} 
                    onChange={handleOnChangeName} 
                />
                <Button 
                    className='button create-portfolio__submit-button' 
                    type={ButtonType.SUBMIT}
                >Create</Button>
            </form>
        </FormTemplate>
    );
}

export { CreatePortfolio };
import { 
    ChangeEvent, 
    useState 
} from 'react';
import { useAppDispatch } from '../../../../hooks/hooks';
import { 
    Button, 
    IconButton,
    Input,
    Modal
} from '../../../../components/components';
import { 
    ButtonType, 
    IconName 
} from '../../../../common/enums/enums';
import { createPortfolio } from '../../../../store/portfolio/actions';
import './PortfolioForm.css';

type Props = {
    hidden: boolean;
    onClose: () => void;
}

const PortfolioForm: React.FC<Props> = ({
    hidden,
    onClose
}) => {
    const dispatch = useAppDispatch();
    const [name, setName] = useState('');

    const handleOnChangeName = (event: ChangeEvent<HTMLInputElement>) => {
        const enteredName = event.target.value;

        setName(enteredName);
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
        <Modal hidden={hidden}>
            <div className='portfolio-form-wrapper roboto-regular'>
                <header className='portfolio-form-header'>
                    <h3>Creating a new portfolio</h3>
                    <IconButton className='icon-button' name={IconName.XMARK} onClick={onClose}></IconButton>
                </header>
                <form className="portfolio-form" method="post" action="" onSubmit={handleOnSubmit}>
                    <div className='portfolio-inputs'>
                        <label className='portfolio-name-label' htmlFor="portfolio-name-input">Name:</label>
                        <Input className='normal-input' id='portfolio-name-input' value={name} onChange={handleOnChangeName}></Input>
                    </div>
                    <div className='create-portfolio-btn-wrapper'>
                        <Button className='create-portfolio-btn normal-btn' type={ButtonType.SUBMIT}>Create portfolio</Button>
                    </div>
                </form>
            </div>
        </Modal>
    );
};

export { PortfolioForm };

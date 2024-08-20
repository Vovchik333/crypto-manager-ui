import { IconName } from "../../common/enums";
import { Icon } from "..";
import './Spinner.css';

const Spinner: React.FC = () => {
    return (
        <div className="spinner">
            <Icon 
                className="spinner__icon" 
                name={IconName.SPINNER} 
                spin={true}
            />
        </div>
    );
}

export { Spinner };

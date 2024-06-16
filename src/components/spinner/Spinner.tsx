import { IconName } from "../../common/enums/enums";
import { Icon } from "../components";
import './Spinner.css';

const Spinner: React.FC = () => {
    return (
        <div className="spinner-wraper">
            <Icon className="spinner" name={IconName.SPINNER} spin={true}/>
        </div>
    );
}

export { Spinner };

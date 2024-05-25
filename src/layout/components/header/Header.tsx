import './Header.css';
import barsSolid from '../../../assets/icons/bars-solid.svg';

const Header: React.FC = () => {
    return (
        <header className='main-header'>
            <img className='bars-solid' src={barsSolid} alt="bars-solid" />
        </header>
    );
}

export { Header };
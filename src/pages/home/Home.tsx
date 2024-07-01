import { Link } from 'react-router-dom';
import { AppRoute } from '../../common/enums/enums';
import { Button } from '../../components/button/Button';
import './Home.css';

const Home = () => {
    return (
        <main className="home-page">
            <h1 className='home-page__title'>Meet the most convenient and useful crypto manager</h1>
            <p className='home-page__description'>
                Gain good investment management experience. 
                The app has many analytical tools that will 
                help you monitor the state of your crypto portfolio.
            </p>
            <Link className='home-page__sign-in-link' to={AppRoute.SIGN_IN}>
                <Button 
                    className='button home-page__sign-in-link-button'
                >Sign in</Button>
            </Link>
        </main>
    );
}

export { Home };

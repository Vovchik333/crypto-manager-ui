import { Link } from 'react-router-dom';
import { AppRoute } from '../../common/enums/enums';
import { Button } from '../../components/button/Button';
import './Home.css';

const Home = () => {
    return (
        <main className="home-content">
            <h1 className='home-section'>Meet the most convenient and useful crypto manager</h1>
            <section className="home-section">
                <span>Gain good investment management experience. The app has many analytical tools that will help you monitor the state of your crypto portfolio.</span>
                <Link className='sign-in-link' to={AppRoute.SIGN_IN}>
                    <Button className='sign-in-link-btn normal-btn'>Sign in</Button>
                </Link>
            </section>
        </main>
    );
}

export { Home };

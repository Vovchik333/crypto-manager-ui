import { Link } from 'react-router-dom';
import './Home.css'
import { AppRoute } from '../../common/enums/enums';

const Home = () => {
    return (
        <main className="home-content">
            <section className="home-section">
                <span className="roboto-black">Meet the most convenient and useful crypto manager</span>
            </section>
            <section className="home-section roboto-regular">
                <span>Gain good investment management experience. The app has many analytical tools that will help you monitor the state of your crypto portfolio.</span>
                <Link className='sign-in-link' to={AppRoute.SIGN_IN}>
                    <button className='small-btn'>Sign in</button>
                </Link>
            </section>
        </main>
    );
}

export { Home };
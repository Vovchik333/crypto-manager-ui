import { Link } from 'react-router-dom';
import { AppRoute } from '../../common/enums';
import { Button } from '../../components/button/Button';
import assetsHomeImage from '../../assets/images/assets_home.png';
import './Home.css';

const Home = () => {
    return (
        <main className="home-page">
            <section className='home-page__description-section'>
                <h1 className='home-page__title'>Meet the most convenient and useful crypto manager</h1>
                <p className='home-page__description'>
                    Gain good investment management experience. 
                    The app has many analytical tools that will 
                    help you monitor the state of your crypto portfolio.
                </p>
                <Link className='home-page__sign-in-link' to={AppRoute.SIGN_IN}>
                    <Button 
                        className='button primary-button'
                    >Get Started</Button>
                </Link>
            </section>
            <aside className='home-page__image-section'>
                <img 
                    className='home-page__assets-home-image'
                    src={assetsHomeImage} 
                    alt="Assets home image" 
                    loading='lazy'
                />
            </aside>
        </main>
    );
}

export { Home };
